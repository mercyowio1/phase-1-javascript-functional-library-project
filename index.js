// Functional Library Implementation

function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        callback(value);
    }
    return collection;
}
function myMap(collection, callback) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  const newArray = [];
  for (let value of values) {
    newArray.push(callback(value));
  }
  return newArray;
}
    
    
function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
    
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }

    return acc;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        if (predicate(value)) return value;
    }
    return undefined;
}
function myFilter(collection, predicate) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  const filteredArray = [];
  for (let value of values) {
    if (predicate(value)) filteredArray.push(value);
  }
  return filteredArray;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
