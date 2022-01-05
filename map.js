const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (arr) => {
  return arr.map(person => `Hi ${person.name}! ${person.discount}% off our best candies for you today!`);
}

console.log(generateMessages(namesAndDiscounts))