module.exports = function multiply(first, second) {

  var result1 = BigInt(first);
  var result2 = BigInt(second);
   
  return (result1 * result2).toString();
}