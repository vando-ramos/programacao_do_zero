function rankedMatchCalculator(wins, losses){
  let balance = wins - losses
  return balance  
}

let rankedBalance = rankedMatchCalculator(120, 20)
let level = ''

if (rankedBalance >= 11 && rankedBalance <= 20){
  level = 'Bronze'
} else if (rankedBalance >= 21 && rankedBalance <= 50){
  level = 'Silver'
} else if(rankedBalance >= 51 && rankedBalance <= 80){
  level = 'Gold'
} else if(rankedBalance >= 81 && rankedBalance <= 90){
  level = 'Diamond'
} else if(rankedBalance >= 91 && rankedBalance <= 100){
  level = 'Legendary'
} else if(rankedBalance >= 101){
  level = 'Immortal'
} else{
  level = 'Iron'
}

console.log(`The Hero has a balance of ${rankedBalance} and is at the ${level} level.`)