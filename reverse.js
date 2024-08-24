function reverseString(str) {
  return str.split('').reverse().join('');
}
const originalString = "my name is raja";
const reversedString = reverseString(originalString);

console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);