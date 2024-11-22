export const drawLetters = () => {
  const letterPool = {
    'A': 9,
    'B': 2,
    'C': 2,
    'D': 4,
    'E': 12,
    'F': 2,
    'G': 3,
    'H': 2,
    'I': 9,
    'J': 1,
    'K': 1,
    'L': 4,
    'M': 2,
    'N': 6,
    'O': 8,
    'P': 2,
    'Q': 1,
    'R': 6,
    'S': 4,
    'T': 6,
    'U': 4,
    'V': 2,
    'W': 2,
    'X': 1,
    'Y': 2,
    'Z': 1
  };

  const pool = [];
  for(const letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      pool.push(letter);
    }
  }

  for (let i = pool.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[randomIndex]] = [pool[randomIndex], pool[i]];
  }

  const hand =pool.slice(0, 10);

  return hand; 
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const count = [...lettersInHand];

  for (const letter of input) {
    const index = count.indexOf(letter);

    if (index === -1) {
      return false;
    } else {
      count.splice(index, 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
