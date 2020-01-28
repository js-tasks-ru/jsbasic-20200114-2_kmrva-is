/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let sortArr = str
    .split(/ |,/)
    .map(item => +item)
    .filter(function (item) {
      return typeof item === 'number' && !isNaN(item);
    })
    .sort(function (a, b) {
      if (a > b) {
        return 1;
      }
      if (a === b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
    });

  return { min: sortArr[0], max: sortArr[sortArr.length - 1]};
}


