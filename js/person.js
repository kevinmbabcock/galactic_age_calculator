export class Person {
  constructor (name, birthdate, current_date, gender, ethnicity) {
    this.name = name;
    let user_age = birthdate.split("-");
    let today = current_date.split("-");
    let new_user_age = [];
    let new_today = [];
    user_age.forEach(function(self) {
      new_user_age.push(parseInt(self));
    })
    today.forEach(function(self) {
      new_today.push(parseInt(self));
    })
    let years = new_today[2] - new_user_age[2];
    if (new_today[0] < new_user_age[0]) {
      years -= 1;
      new_today[0] += 12;
    }
    let months = new_today[0] - new_user_age[0];
    if (new_today[1] < new_user_age[1]) {
      months -= 1;
      new_today[1] += 30;
    }
    let days = new_today[1] - new_user_age[1];
    this.age_in_seconds = ((years * 365 * 24 * 60 * 60) + (months * 30 * 24 * 60 * 60) + (days * 24 * 60 * 60));
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

  mercury_age() {
    let years = this.age_in_seconds / 60 / 60 / 24 * 0.24;
    return Math.round(years);
  }

  venus_age() {
    let years = this.age_in_seconds / 60 / 60 / 24 * 0.62;
    return Math.round(years);
  }

  mars_age() {
    let years = this.age_in_seconds / 60 / 60 / 24 * 1.88;
    return Math.round(years);
  }
}
