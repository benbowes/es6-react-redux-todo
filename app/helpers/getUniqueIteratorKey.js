/**
* @description combines `props.item[index]` {String} with an iteration `index` {Number} to
* create a unique key.
* note: Spaces are replaced with a `_` character.
* @param itemString {String}
* @param index {Number}
* @returns {String} unique key
* @example
* // returns "Something_Loved-up_And_Excellent_4"
* getUniqueIteratorKey("Something Loved-up And Excellent", 4); */

const getUniqueIteratorKey = (itemString, index) => {
  return `${itemString.replace(/ /g, '_')}_${index}`;
};

export default getUniqueIteratorKey;
