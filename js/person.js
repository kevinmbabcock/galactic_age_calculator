export class Person {
  constructor (name, birthdate, current_date, gender, ethnicity) {
    this.name = name;
    let user_age = birthdate.split("-");
    let today = current_date.split("-");
    let years = today[2] - user_age[2];
    if (today[0] < user_age[0]) {
      years -= 1;
      today[0] += 12;
    }
    let months = today[0] - user_age[0];
    if (today[1] < user_age[1]) {
      months -= 1;
      today[1] += 30;
    }
    let days = today[1] - user_age[1];
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
    } else if (this.ethnicity === "asian-american") {
      this.life_expectancy += 12;
    } else if (this.ethnicity === "native_american") {
      this.life_expectancy += 2;
    }
  }
}
