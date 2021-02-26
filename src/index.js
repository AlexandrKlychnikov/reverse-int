module.exports = function reverse (n) {
  let str = (n>0) ? n.toString() : (-n).toString();
    return +str.split('').reverse().join('');
}
