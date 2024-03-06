# from flask import Flask
from flask import redirect
from flask import Flask, redirect, url_for
from flask import render_template
from flask import request, session
from flask import jsonify

app = Flask(__name__)
app.secret_key = '123'


# @app.route('/profile')
@app.route('/home')
@app.route('/')
def home_page():
    return render_template('home.html',
                           name='Yossi', second_name='Katz',
                           age=30,
                           hobbies=['Tennis', 'Computers', 'Army', 'Cookies'],
                           user_details={
                               'color': 'orange',
                               'id': 123,
                               'height': 100,
                               'hair': 'long'
                           }
                           )


# @app.route('/profile', methods=['GET'])
@app.route('/profile')
def profile_page():
    # return 'Welcome to profile page!'
    return redirect(url_for('home_page'))


@app.route('/users', defaults={'user_id': 123})
@app.route('/users/<int:user_id>/products/<product_name>')
def users_func(user_id, product_name):
    # DB ...
    # v
    return render_template('users.html', user_name=user_id, product_name=product_name)


@app.route('/api/orders/<int:order_id>')
def orders_func(order_id):
    # DB ...
    order_data = {
        'name': 'computer',
        'date': 2014,
        'my_id': order_id,
        'description': 'good'
    }
    return jsonify(order_data)


@app.route('/about')
def about_page():
    return render_template('about.html')


@app.route('/logout', methods=['GET'])
def logout_func():
    session['logged_in'] = False
    session['username'] = ''
    session['email'] = ''
    return redirect(url_for('login_func'))


@app.route('/login', methods=['GET', 'POST'])
def login_func():
    if request.method == 'GET':
        if 'username' in request.args:
            username = request.args['username']
            email = request.args['email']
            password = request.args['password']
            # do the check with DB
            return render_template('login.html',
                                   username=username, email=email)
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        # do the check with DB
        session['username'] = username
        session['email'] = email
        session['logged_in'] = True
        return render_template('login.html',
                               username=username, email=email)

    return render_template('login.html')


# ------------------------------------------------------------------ #
# ------------------------------------------------------------------ #
# ------------------------------------------------------------------ #
import pymongo
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://1919ars:1919ars@cluster0.kg52uoz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new cluster and connect to the server
cluster = MongoClient(uri, server_api=ServerApi('1'))
mydatabase = cluster['mydatabase']
customers_col = mydatabase['customers']

# sample_analytics_db = cluster['sample_analytics']

@app.route('/mongodb')
def mongodb_func():
    # message = 'good'
    # message = pymongo.version
    # message = cluster.list_database_names()
    # sample_analytics_db = cluster['sample_analytics']
    # message = sample_analytics_db.list_collection_names()

    # message = mydatabase.list_collection_names()
    # message = cluster.list_database_names()

    # insert_one
    # my_dict = {
    #     'name': 'John',
    #     'address': 'Highway 37',
    #     'rating': 10
    # }
    # customers_col.insert_one(my_dict)
    # # message = cluster.list_database_names()
    # message = mydatabase.list_collection_names()

    # insert_many
    # my_list = [
    #     {'name': 'Tal', 'address': 'Hogwards 37', 'rating': 11},
    #     {'name': 'Bekka', 'address': 'Bronx 3', 'rating': 20},
    #     {'name': 'Alisa', 'address': 'Area 9', 'rating': 30},
    # ]
    # customers_col.insert_many(my_list)
    # message = mydatabase.list_collection_names()

    # find
    # my_list = list(customers_col.find())

    # find query
    # myquery = {'name': 'John'}
    # my_list = list(customers_col.find(myquery))

    # myquery = {'rating': {"$gt": 10}}
    # my_list = list(customers_col.find(myquery))

    # findOne
    # message = customers_col.find_one({'name': 'John'})

    # sort
    # my_list = list(customers_col.find().sort('name'))
    # my_list = list(customers_col.find().sort('name', -1))

    # limit
    # message = len(list(customers_col.find()))
    # my_list = list(customers_col.find().limit(3))
    # my_list = list(customers_col.find().sort('rating', -1).limit(3))

    # update one
    # my_query = {'address': 'Highway 37'}
    # new_values = {'$set': {'address': 'Canyon 123'}}
    # customers_col.update_one(my_query, new_values)
    # my_list = list(customers_col.find())

    # update many
    # customers_col.update_many({}, {'$inc': {'rating': 1}})
    # customers_col.update_many({}, {'$set': {'rating': 1}})
    # my_list = list(customers_col.find())

    # delete one
    # customers_col.delete_one({'name': 'John'})
    # my_list = list(customers_col.find())

    # delete many
    # customers_col.delete_many({'rating': {'$gt': 30}})
    # my_list = list(customers_col.find())

    # aggregations
    # aggregation = [
    #     {
    #         '$match': {
    #             'rating': {
    #                 '$gt': 0
    #             }
    #         }
    #     }, {
    #         '$sort': {
    #             'rating': 1
    #         }
    #     }, {
    #         '$limit': 2
    #     }
    # ]
    # my_list = list(customers_col.aggregate(aggregation))

    my_list = customers_col.find()
    # return render_template('mongodb_lecture.html', message=message)
    return render_template('mongodb_lecture.html', my_list=my_list)


@app.route('/db_insert')
def insert_func():
    # to check if exists
    # insert_one
    my_dict = {
        'name': request.args['name'],
        'address': request.args['address'],
        'rating': int(request.args['rating']),
    }
    customers_col.insert_one(my_dict)
    return redirect(url_for('mongodb_func'))


@app.route('/db_delete', methods=['POST'])
def delete_func():
    customers_col.delete_one({'name': request.form['name']})
    return redirect(url_for('mongodb_func'))


@app.route('/db_increment')
def increment_func():
    customers_col.update_many({}, {'$inc': {'rating': 1}})
    return redirect(url_for('mongodb_func'))
