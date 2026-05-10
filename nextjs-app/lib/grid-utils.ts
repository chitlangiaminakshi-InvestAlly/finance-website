/**
 * Calculates the grid classes for a card based on the total number of cards 
 * in a 6-column grid system following the "Maximum Rows of 3" logic.
 * 
 * Logic:
 * - We want to solve 3x + 2y = n where x is rows of 3 and y is rows of 2.
 * - We maximize x such that (n - 3x) is non-negative and even.
 * - Rows of 3 use col-span-2.
 * - Rows of 2 use col-span-3.
 */
export function getGridCardClasses(totalCards: number, index: number): string {
  if (totalCards === 1) return "md:col-span-6";
  
  let x = 0; // Number of rows of 3
  
  // Find max x such that (n - 3x) is non-negative and even
  for (let i = Math.floor(totalCards / 3); i >= 0; i--) {
    const remainder = totalCards - 3 * i;
    if (remainder >= 0 && remainder % 2 === 0) {
      x = i;
      break;
    }
  }
  
  const cardsInRowsOf3 = 3 * x;
  
  if (index < cardsInRowsOf3) {
    return "md:col-span-2"; // Row of 3
  } else {
    return "md:col-span-3"; // Row of 2
  }
}

/**
 * Returns the base grid container classes for the 6-column system.
 */
export function getGridContainerClasses(): string {
  return "grid grid-cols-1 md:grid-cols-6 gap-8";
}
