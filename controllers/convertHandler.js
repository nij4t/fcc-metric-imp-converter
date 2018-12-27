/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    const fractionSignIndex = input.indexOf("/");
    if (fractionSignIndex > 0)
      return (
        parseFloat(input.substring(0, fractionSignIndex)) /
        parseFloat(input.substring(fractionSignIndex + 1))
      );

    return parseFloat(input);
  };

  this.getUnit = function(input) {
    const units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']
    const num = this.getNum(input).toString().length
    const unit = input.substring(num)

    return units.indexOf(unit) !== -1 ? unit : 'unknown unit'
  };

  this.getReturnUnit = function(initUnit) {
    const inputUnits = ['gal','l','mi','km','lbs','kg'];
    const returnUnits = ['l','gal','km','mi','kg','lbs'];

    return returnUnits[inputUnits.indexOf(initUnit)]
  };

  this.spellOutUnit = function(unit) {
    const inputUnits = ['gal','l','mi','km','lbs','kg'];
    const spellOutUnits = ['gallon','liter','mile','kilometer','pound','kilogram'];

    return spellOutUnits[inputUnits.indexOf(unit)]
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const inputUnits = ['gal','l','mi','km','lbs','kg'];
    const constants = [galToL, 1/galToL, miToKm, 1/miToKm, lbsToKg, 1/lbsToKg]

    return initNum * constants[inputUnits.indexOf(initUnit)]
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
