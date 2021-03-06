/** Class: Enumerators **/

/** String.prototype polyfill */

module.exports = String.prototype.next = function () {
  /** incase string is a recognized noun */
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  const that = this.valueOf().toLowerCase();

  // if day is valid
  if (days.indexOf(that) > -1) {
    // if value is sunday, return monday else return value at index + 1
    return (days.indexOf(that) === days.length - 1) ? days[0] : days[days.indexOf(that) + 1];
  } else if (months.indexOf(that) > -1) {
    return (months.indexOf(that) === months.length - 1) ? months[0] : months[months.indexOf(that) + 1];
  }
  /** handle UTF-8 charCode */
  // selecting last char. in string
  let charCode = this.charCodeAt(this.length - 1);
  // valid codes are: [A-B, a-b]
  if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
    charCode += 1;
    // edge cases: [}[:]
    if (charCode !== 91 && charCode !== 123) {
      return String.fromCharCode(charCode);
    }
  }
  // handle Numbers
  let int = parseInt(this);
  if (typeof int === 'number') {
    int += 1;
    return String(int);
  }
  // invalid catch all
  return null;
};


/** Number.prototype polyfill */ // *must wrap number in (parens)

module.exports = Number.prototype.next = function () {
  let num = this;
  num += 1;
  return num;
};
