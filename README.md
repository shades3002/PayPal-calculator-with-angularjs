# PayPal-calculator-with-angularjs | [Demo](https://shades3002.github.io/PayPal-calculator-with-angularjs "Demo")
PayPal calculator with AngularJs, to calculate the fees charged by the platform when sending and receiving.

# Synopsis

When making Paypal balance exchanges it becomes necessary to calculate the commissions, to know the net amount that we will receive. For this we developed a simple calculator in AngularJs.

# Features
* Sass
* Pug
* GruntJs
* AngularJs
* NodeJs
* Bootstrap

# Motivation

For this project I wanted to use [Pug](https://pugjs.org/ "Pug") which is a template engine of NodeJs to facilitate writing HTML, turn the style handle with [SASS](http://sass-lang.com/ "SASS"). Everything was automated with the [GruntJs](https://gruntjs.com/ "GruntJs") task manager.

# Installation

Note: you must have NodeJs installed in your environment, in order to run the application

1. Download the source code from git repository, executing the following command:

```bash
$ sudo apt-get install git
$ git clone git@github.com:shades3002/PayPal-calculator-with-angularjs.git
$ cd PayPal-calculator-with-angularjs
$ git checkout master
$ sudo npm install -g grunt-cli
$ npm start
```

# Production

Note: To put into production you must run the next task

```bash
$ sudo apt-get install git
$ git clone git@github.com:shades3002/PayPal-calculator-with-angularjs.git
$ cd PayPal-calculator-with-angularjs
$ git checkout master
$ sudo npm install -g grunt-cli
$ npm install
$ grunt prodution
$ sudo cp -R ../PayPal-calculator-with-angularjs /var/www/html
```
# Contributors
- Carlos Gutierrez

# License
- LGPL V3.
