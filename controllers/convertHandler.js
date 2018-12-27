/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    input = input.toString()
    const fractionSignIndex = input.indexOf("/");
    const leftFraction = input.substring(0, fractionSignIndex);
    const rightFraction = input.substring(fractionSignIndex + 1);
    if (fractionSignIndex > 0) {
      if ((rightFraction.match(/\//g) || []).length !== 0 ) return 'invalid number'
      if (_isValidNumber(rightFraction)) return 'invalid number'
      if (_isValidNumber(leftFraction)) return 'invalid number'
      return (
        parseFloat(leftFraction) /
        parseFloat(rightFraction)
      );
    }
    if ((input.match(/\./g) || []).length > 1 ) return 'invalid number'
    return parseFloat(input) || 'invalid number';
  };

  _isValidNumber = numberString => {
    return (numberString.match(/\./g) || []).length > 1;
  }

  this.getUnit = function(input) {
    const units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']
    const unit = input.replace(/[0-9\.\/]*/g, '')
    return units.indexOf(unit) !== -1 ? unit : 'unknown unit'
  };

  this.getReturnUnit = function(initUnit) {
    const inputUnits = ['gal','l','mi','km','lbs','kg'];
    const returnUnits = ['l','gal','km','mi','kg','lbs'];
    const index = inputUnits.indexOf(initUnit.toLowerCase());

    return index !== -1 ? returnUnits[index] : 'unknown unit'
  };

  this.spellOutUnit = function(unit) {
    const inputUnits = ['gal','l','mi','km','lbs','kg'];
    const spellOutUnits = ['gallon','liter','mile','kilometer','pound','kilogram'];

    return spellOutUnits[inputUnits.indexOf(unit.toLowerCase())]
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const inputUnits = ['gal','l','mi','km','lbs','kg'];
    const constants = [galToL, 1/galToL, miToKm, 1/miToKm, lbsToKg, 1/lbsToKg]

    const result = parseFloat((initNum * constants[inputUnits.indexOf(initUnit.toLowerCase())]).toFixed(5));
    return result
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)}s converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  };
}

module.exports = ConvertHandler;
