var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(/* Your code here */function(item){
  //Math.sqrt(9)
  return (Math.sqrt((item.x * item.x)+ (item.y * item.y) ));

});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);