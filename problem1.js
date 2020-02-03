let {d1, b1, w1, e1, x} = require('yargs').argv
let e2 = amountToDeduct = e1 - ((x/100) * e1)
let maxBonusToDeduct = (0.1 * e2)           //since only 10% of e2 can be used from b1

if (b1 > maxBonusToDeduct) {
  b1 -= maxBonusToDeduct
  amountToDeduct -= maxBonusToDeduct
} else {
  amountToDeduct -= b1
  b1 = 0
}

if (d1 > amountToDeduct) {
  d1 -= amountToDeduct
  amountToDeduct = 0
} else {
  amountToDeduct -= d1
  d1 = 0
}

w1 -= amountToDeduct                        //since it is assumed wallet has enough to enter contest

console.log('Balance in bonus bucket (b1):', b1)
console.log('Balance in deposit bucket (d1):', d1)
console.log('Balance in winning bucket (w1):', w1)

process.exit(1)