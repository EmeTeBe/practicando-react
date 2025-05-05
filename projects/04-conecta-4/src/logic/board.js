import { COLS, ROWS } from '../constants.js'

export const checkWinner = (boardToCheck) => {
        //horizontales
        for (let row = 0; row < ROWS; row++) {
          for (let col = 0; col<= COLS - 4; col++) {
            const start = row * COLS + col
            if (
              boardToCheck[start] &&
              boardToCheck[start] === boardToCheck[start + 1] &&
              boardToCheck[start] === boardToCheck[start + 2] &&
              boardToCheck[start] === boardToCheck[start + 3]
            ) {
              return boardToCheck[start]
            }
          }
        }
        //verticales
        for (let col = 0; col < COLS; col++) {
          for (let row = 0; row <= ROWS - 4; row++) {
            const start = row * COLS + col
            if (
              boardToCheck[start] &&
              boardToCheck[start] === boardToCheck[start + COLS] &&
              boardToCheck[start] === boardToCheck[start + COLS * 2] &&
              boardToCheck[start] === boardToCheck[start + COLS * 3]
            ) {
              return boardToCheck[start]
            }
          }
        }
        //diagonales derecha (\)
        for (let row = 0; row <= ROWS - 4; row++) {
          for (let col = 0; col <= COLS - 4; col++) {
            const start = row * COLS + col
            if (
              boardToCheck[start] &&
              boardToCheck[start] === boardToCheck[start + COLS + 1] &&
              boardToCheck[start] === boardToCheck[start + COLS * 2 + 2] &&
              boardToCheck[start] === boardToCheck[start + COLS * 3 + 3]
            ) {
              return boardToCheck[start]
            }
          }
        }
        //diagonales izquierda (/)
        for (let row = 0; row <= ROWS - 4; row++) {
          for (let col = 3; col < COLS; col++) {
            const start = row * COLS + col
            if (
              boardToCheck[start] &&
              boardToCheck[start] === boardToCheck[start + COLS - 1] &&
              boardToCheck[start] === boardToCheck[start + COLS * 2 - 2] &&
              boardToCheck[start] === boardToCheck[start + COLS * 3 - 3]
            ) {
              return boardToCheck[start]
            }
          }
        }
        //si no hay ganador, devolvemos null
        return null
      }

  //funcion para verificar empate
export const checkGameOver = (boardToCheck) => {
    return boardToCheck.every((cell) => cell !== null)
  }