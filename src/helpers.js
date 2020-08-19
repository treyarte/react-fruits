/**
 * Select an random element form an array
 *  - input: Array
 *  - output: Array[random]
 */
function choice(items) {
  const randomIndex = Math.floor(Math.random() * items.length);

  return items[randomIndex];
}

/**
 * Removes an item from an array
 *  - input: Array, Array[element]
 *  - output: Array[element]
 *  - constraints: if item dont exist return undefined
 */
function remove(items, item) {
  const index = items.indexOf(item);

  if (index === -1) return undefined;

  return items.splice(index, index + 1);
}

module.exports = {
  choice,
  remove,
};
