const testNum = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(number.toString() + " > 10");
    }
    reject(number.toString() + " < 10");
  });
}

testNum(15)
  .then(data => console.log(data))
  .catch(error => console.log(error));

const allCaps = (array) => {
  return new Promise((resolve, reject) => {
    if (typeof array === 'string') {
      resolve(array.map(word => word.toUpperCase()))
    }
    reject("data type of string required")
  })
}

const sortWords = data => data.sort();

allCaps(['wowow', 'pants', 'bird', 234])
  .then(data => sortWords(data))
  .then(sorted => console.log(sorted))
  .catch(error => console.log(error));
