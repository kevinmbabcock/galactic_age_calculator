import { Person } from './../js/person.js';

describe('Person', function() {
  let person1;
  let person2;
  let person3;

  beforeEach(function() {
    person1 = new Person("Kevin", "6-2-1990", "1-5-2018", "male", "white");
    person2 = new Person("Brian", "2-28-1987", "1-5-2018", "male", "latino");
    person3 = new Person("Sharon", "11-17-1995", "1-5-2018", "female", "native_american");
  })

  it('should create person object with correct age_in_seconds and life_expectancy', function() {
    // expect(person1.age_in_seconds).toEqual();
    expect(person1.life_expectancy).toEqual(79);
    // expect(person2.age_in_seconds).toEqual();
    expect(person2.life_expectancy).toEqual(83);
    // expect(person3.age_in_seconds).toEqual();
    expect(person3.life_expectancy).toEqual(82);
  })
})
