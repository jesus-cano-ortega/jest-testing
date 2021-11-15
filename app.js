const fromEuroToDollar = ((valueInEuro) => {

    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;

});

const fromDollarToYen = ((valueInDollar) => {

    let valueInYen = valueInDollar * 114.06;
    return valueInYen; 

});

const fromYenToPound = ((valueInYen) => {

    let valueInPound = valueInYen * 0.0065;
    return valueInPound; 

});

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };