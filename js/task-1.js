/**
 * @param {Object} products - Об'єкт, де ключі - назви товарів, а значення - їх кількість.
 * @param {number} containerSize - Максимальна кількість одиниць товарів, яку може вмістити контейнер.
 * @returns {boolean} - true, якщо загальна кількість товарів менше або дорівнює containerSize, інакше false.
 */
function isEnoughCapacity(products, containerSize) {

  const productQuantities = Object.values(products);

  const totalProducts = productQuantities.reduce((sum, quantity) => {
    return sum + quantity;
  }, 0);


  return totalProducts <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); 

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); 

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); 

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); 