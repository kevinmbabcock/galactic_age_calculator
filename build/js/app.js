(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function Person(name, birthdate, current_date, gender, ethnicity) {
  _classCallCheck(this, Person);

  this.name = name;
  var user_age = birthdate.split("-");
  var today = current_date.split("-");
  var new_user_age = [];
  var new_today = [];
  user_age.forEach(function (self) {
    new_user_age.push(parseInt(self));
  });
  today.forEach(function (self) {
    new_today.push(parseInt(self));
  });
  var years = new_today[2] - new_user_age[2];
  if (new_today[0] < new_user_age[0]) {
    years -= 1;
    new_today[0] += 12;
  }
  var months = new_today[0] - new_user_age[0];
  if (new_today[1] < new_user_age[1]) {
    months -= 1;
    new_today[1] += 30;
  }
  var days = new_today[1] - new_user_age[1];
  this.age_in_seconds = years * 365 * 24 * 60 * 60 + months * 30 * 24 * 60 * 60 + days * 24 * 60 * 60;
  this.gender = gender;
  this.ethnicity = ethnicity;
  this.life_expectancy = 75;
  if (gender === "female") {
    this.life_expectancy += 5;
  }
  if (this.ethnicity === "white") {
    this.life_expectancy += 4;
  } else if (this.ethnicity === "latino") {
    this.life_expectancy += 8;
  } else if (this.ethnicity === "asian-american") {
    this.life_expectancy += 12;
  } else if (this.ethnicity === "native_american") {
    this.life_expectancy += 2;
  }
};

},{}],2:[function(require,module,exports){
"use strict";

var _person = require("./../js/person.js");

$(document).ready(function () {
  $("#userInput").submit(function (event) {
    event.preventDefault();
  });
});

},{"./../js/person.js":1}]},{},[2]);
