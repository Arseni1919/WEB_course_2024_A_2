# from flask import Flask
from flask import redirect
from flask import Flask, redirect, url_for
from flask import render_template
from flask import request, session


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







