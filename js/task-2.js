/**
 * Обчислює середньодобове значення кількості калорій за тиждень.
 * @param {Array<Object>} days - Масив об'єктів, кожен з яких має властивість calories.
 * @returns {number} - Середньодобова кількість калорій або 0, якщо масив порожній.
 */
function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }

  const totalCalories = days.reduce((sum, day) => {
    return sum + day.calories;
  }, 0);

  const averageCalories = totalCalories / days.length;

  return averageCalories;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
);

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); 

console.log(
  calcAverageCalories([])
); 