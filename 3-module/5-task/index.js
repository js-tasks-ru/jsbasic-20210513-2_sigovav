function getMinMax(str) {
  let arr = str.split(" ");
  let arrNumbers = [];

  for (let value of arr) {
    value = value.trim().split(",");
    arrNumbers.push(value);
  }

  arrNumbers = arrNumbers.flat();

  let arrFiltered = arrNumbers.filter( (element) => {
    return Number(element);
  });

  let result = {
    min: Math.min(...arrFiltered),
    max: Math.max(...arrFiltered)
  };

  return result;
}
