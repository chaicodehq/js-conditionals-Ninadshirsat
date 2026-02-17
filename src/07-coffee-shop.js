/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  let total = 0;
  let basePrice = 0;
  let typePrice = 0;
if ((size !== "small" && size !== "medium" && size !== "large")) return -1;
if((type !== "regular" && type !== "latte" && type !== "cappuccino" && type !== "mocha")) return -1;

switch(size){
  case "small": basePrice += 3.00;
  break;
  case "medium": basePrice += 4.00;
  break;
  case "large": basePrice += 5.00;
  break;
} 
total = basePrice;

switch(type){
  case "regular": typePrice += 0.00;
  break;
  case "latte": typePrice += 1.00;
  break;
  case "cappuccino": typePrice += 1.50;
  break;
  case "mocha": typePrice += 2.00;
  break;
} 

total = total + typePrice;

if(extras.whippedCream && extras.extraShot){
  total = total + 1.25
} else if(extras.whippedCream){
  total = total + 0.50;
} else if (extras.extraShot){
  total = total + 0.75;
}

return Number(total.toFixed(2));

// //Code by AI
// // Base prices
//   const sizePrices = {
//     small: 3.00,
//     medium: 4.00,
//     large: 5.00
//   };

//   // Type add-ons
//   const typePrices = {
//     regular: 0.00,
//     latte: 1.00,
//     cappuccino: 1.50,
//     mocha: 2.00
//   };

//   // Validation
//   if (!(size in sizePrices)) return -1;
//   if (!(type in typePrices)) return -1;

//   let total = 0;

//   // Base + Type
//   total += sizePrices[size];
//   total += typePrices[type];

//   // Extras (independent)
//   if (extras.whippedCream) total += 0.50;
//   if (extras.extraShot) total += 0.75;

//   return Number(total.toFixed(2));

}
