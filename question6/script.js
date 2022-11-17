let john = { name: "john", age: 25 };
let pete = { name: "pete", age: 30 };
let mary = { name: "mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(args) {
  let sum = args.reduce((accu, item) => accu + item.age, 0);
  return sum / args.length;
}
console.log(getAverageAge(arr));