import { WINNER_COMBOS } from '../constants.js'


export const checkForWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
  }
  return null
  }

export const checkGameOver = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }