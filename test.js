const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One dollar should be 114.06 yen", function(){
    expect(fromDollarToYen(5)).toBe(570.3);
});

test("One yen should be 0.0065 pounds", function(){
    expect(fromYenToPound(1000)).toBe(6.5);
})