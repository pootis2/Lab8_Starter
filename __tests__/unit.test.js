// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber('(123) 4567890')).toBe(false);
});
test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});


test('matches valid emails', () => {
    expect(functions.isEmail('email@gmail.com')).toBe(true);
});
test('matches valid emails', () => {
    expect(functions.isEmail('email@ucsd.edu')).toBe(true);
});
test('matches valid emails', () => {
    expect(functions.isEmail('email@gmail')).toBe(false);
});
test('matches valid emails', () => {
    expect(functions.isEmail('email@ucsd.edu.com')).toBe(false);
});



test('matches valid password', () => {
    expect(functions.isStrongPassword('password')).toBe(true);
});
test('matches valid password', () => {
    expect(functions.isStrongPassword('abcd_1234')).toBe(true);
});
test('matches valid password', () => {
    expect(functions.isStrongPassword('1234_abcd')).toBe(false);
});
test('matches valid password', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});


test('matches valid dates', () => {
    expect(functions.isDate('06/04/1989')).toBe(true);
});
test('matches valid dates', () => {
    expect(functions.isDate('02/30/2023')).toBe(true);
});
test('matches valid dates', () => {
    expect(functions.isDate('1989/06/04')).toBe(false);
});
test('matches valid dates', () => {
    expect(functions.isDate('89/06/04')).toBe(false);
});


test('matches valid hex codes', () => {
    expect(functions.isHexColor('FFF')).toBe(true);
});
test('matches valid hex codes', () => {
    expect(functions.isHexColor('FF1234')).toBe(true);
});
test('matches valid hex codes', () => {
    expect(functions.isHexColor('FFFF')).toBe(false);
});
test('matches valid hex codes', () => {
    expect(functions.isHexColor('1234567890')).toBe(false);
});



