var animals = [
    {name: 'weurg', animal: 'dog'},
    {name: 'grtgre', animal: 'cat'},
    {name: 'gwrgrg', animal: 'rabbit'},
    {name: 'erfgwrg', animal: 'rabbit'},
    {name: 'grgre', animal: 'cat'},
    {name: 'wgrreg', animal: 'dog'},
    {name: 'rgw', animal: 'dog'}
]

var orders = [
    {amount: 123},
    {amount: 270},
    {amount: 623},
    {amount: 562}
]

// filter 
var dogs = animals.filter((axror) => axror.animal === 'dog')

// var dogs = []
// for (let i = 0; i < animals.length; i++) {
//     if(animals[i].animal === 'dog'){
//         dogs.push(animals[i])
//     }
// }

// map
var dogsnames = animals.map((axror) => axror.name)

// var dogsnames = []
// for (let i = 0; i < animals.length; i++) {
//     dogsnames.push(animals[i].name)
// }


// when you can't find the right list transformation
// reduce
var totalAmount = orders.reduce(function (sum, value) { 
    // console.log(sum, value, value.amount);
    return sum + value.amount
}, 0)
// zero is a starting value :)

// var totalAmount = 0
// for (let i = 0; i < orders.length; i++) {
//     totalAmount += orders[i].amount    
// }
console.log(totalAmount);