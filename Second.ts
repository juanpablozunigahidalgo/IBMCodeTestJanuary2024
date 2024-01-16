function romanizer(numbers: number[]): string[] {
  const result: string[] = [];

  for (let num of numbers) {
    let romanNumeral = '';

    const romanSymbols: [number, string][] = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I'],
    ];

    for (let [value, symbol] of romanSymbols) {
      while (num >= value) {
        romanNumeral += symbol;
        num -= value;
      }
    }

    result.push(romanNumeral);
  }

  return result;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const result = romanizer(numbers);
console.log(result); // Output: ["I", "II", "III", "IV", "V"]