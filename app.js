function bubbleSort(arr) {
  // Создаем копию массива, чтобы не изменять исходный
  const sorted = [...arr];
  const n = sorted.length;

  // Внешний цикл - количество проходов
  for (let i = 0; i < n - 1; i++) {
    // Внутренний цикл - сравнение соседних элементов
    for (let j = 0; j < n - 1 - i; j++) {
      // Если текущий элемент больше следующего, меняем их местами
      if (sorted[j] > sorted[j + 1]) {
        // Обмен значений
        const temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  return sorted;
}

// Тестирование
const arr = [1, 40, -5, 10, 0];
const sortedArr = bubbleSort(arr);

console.log("Исходный массив:", arr);
console.log("Отсортированный массив:", sortedArr);
