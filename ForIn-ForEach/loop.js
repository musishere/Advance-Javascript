// for each loop can be executed on arrays[]

var a = [12, 123, 3124, 32, 151, 345, 15, 345, 134, 5];

a.forEach(function (value) {
  console.log(value + 2);
});

// forEach never change anything in original array
