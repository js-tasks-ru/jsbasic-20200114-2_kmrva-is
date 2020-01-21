/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  if (lowerStr.indexOf('1xbet') > -1 || lowerStr.indexOf('xxx') > -1) {
    return true;
  }
  return false;
}
