# from flask import Flask
from flask import redirect
from flask import Flask, redirect, url_for
from flask import render_template

app = Flask(__name__)


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







