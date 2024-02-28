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







