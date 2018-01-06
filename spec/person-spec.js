import { Person } from './../js/person.js';

describe('Person', function() {
  let person1;
  let person2;
  let person3;

  beforeEach(function() {
    person1 = new Person("Kevin", "6-2-1990", "1-5-2018", "male", "white");
    person2 = new Person("Brian", "2-28-1987", "1-5-2018", "male", "latino");
    person3 = new Person("Wendy", "3-24-2011", "1-5-2018", "female", "asian_american");
  });

  it('should create person object with correct age_in_seconds and life_expectancy', function() {
    expect(person1.age_in_seconds).toEqual(869875200);
    expect(person1.life_expectancy).toEqual(79);
    expect(person2.age_in_seconds).toEqual(972604800);
    expect(person2.life_expectancy).toEqual(83);
    expect(person3.age_in_seconds).toEqual(213494400);
    expect(person3.life_expectancy).toEqual(92);
  });

  it('should test the mercury_age() method', function() {
    expect(person1.mercury_age()).toEqual(2416);
    expect(person2.mercury_age()).toEqual(2702);
    expect(person3.mercury_age()).toEqual(593);
  });

  it('should test the venus_age() method', function() {
    expect(person1.venus_age()).toEqual(6242);
    expect(person2.venus_age()).toEqual(6979);
    expect(person3.venus_age()).toEqual(1532);
  })

  it('should test the mars_age() method', function() {
    expect(person1.mars_age()).toEqual(18928);
    expect(person2.mars_age()).toEqual(21163);
    expect(person3.mars_age()).toEqual(4645);
  })

  it('should test the jupiter_age() method', function() {
    expect(person1.jupiter_age()).toEqual(119406);
    expect(person2.jupiter_age()).toEqual(133508);
    expect(person3.jupiter_age()).toEqual(29306);
  })

  it('should test the mercury_life_expectancy() method', function() {
    expect(person1.mercury_life_expectancy()).toEqual(19);
    expect(person2.mercury_life_expectancy()).toEqual(20);
    expect(person3.mercury_life_expectancy()).toEqual(22);
  })

  it('should test the venus_life_expectancy() method', function() {
    expect(person1.venus_life_expectancy()).toEqual(49);
    expect(person2.venus_life_expectancy()).toEqual(51);
    expect(person3.venus_life_expectancy()).toEqual(57);
  })

  it('should test the mars_life_expectancy() method', function() {
    expect(person1.mars_life_expectancy()).toEqual(149);
    expect(person2.mars_life_expectancy()).toEqual(156);
    expect(person3.mars_life_expectancy()).toEqual(173);
  })

});
