(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function () {
  function Person(name, birthdate, current_date, gender, ethnicity) {
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
    } else if (this.ethnicity === "asian_american") {
      this.life_expectancy += 12;
    } else if (this.ethnicity === "native_american") {
      this.life_expectancy += 2;
    }
  }

  _createClass(Person, [{
    key: "mercury_age",
    value: function mercury_age() {
      var years = this.age_in_seconds / 60 / 60 / 24 * 0.24;
      return Math.round(years);
    }
  }, {
    key: "venus_age",
    value: function venus_age() {
      var years = this.age_in_seconds / 60 / 60 / 24 * 0.62;
      return Math.round(years);
    }
  }, {
    key: "mars_age",
    value: function mars_age() {
      var years = this.age_in_seconds / 60 / 60 / 24 * 1.88;
      return Math.round(years);
    }
  }, {
    key: "jupiter_age",
    value: function jupiter_age() {
      var years = this.age_in_seconds / 60 / 60 / 24 * 11.86;
      return Math.round(years);
    }
  }]);

  return Person;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _person = require("./../js/person.js");

$(document).ready(function () {
  $("#userInput").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var birthdate = $("#birthdate").val();
    var current_date = $("#current_date").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var ethnicity = $("#ethnicity").val();

    var user = new _person.Person(name, birthdate, current_date, gender, ethnicity);
    console.log(user);

    $("#form").hide();
    $("#calculations").show();
  });
});

},{"./../js/person.js":1}]},{},[2]);
