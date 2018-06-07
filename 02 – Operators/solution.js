function solve(meal_cost, tip_percent, tax_percent) {
  const tip = meal_cost * (tip_percent/100)
  const tax = meal_cost * (tax_percent/100)
  const totalCost = meal_cost + tip + tax
  console.log(`The total meal cost is ${Math.round(totalCost)} dollars.`)
}