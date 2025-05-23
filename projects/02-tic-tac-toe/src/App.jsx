import { useState } from "react"
import confetti from 'canvas-confetti'
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkForWinner, checkGameOver } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index.js"


function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board') // es lento sincrono y bloquea
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn') // es lento sincrono y bloquea
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }


  const updateSquare = (index) => {
    // si el cuadrado ya tiene un valor, no lo actualices
    if (board[index] || winner) return

    // actualizar el cuadradocrear una copia del tablero
    // y actualizar el cuadrado con el valor del turno
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar el nuevo turno en el estado
    saveGameToStorage(newBoard, newTurn)

    // revisar si hay un ganador
    const newWinner = checkForWinner(newBoard)
    if (newWinner) {
      confetti({
        particleCount: 150,
        spread: 50,
        origin: { y: 0.6 },
        scalar: 1.2,
      })
      setWinner(newWinner)
    } else if (checkGameOver(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className="board">
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset</button>
        <section className="game">
          {
            board.map((square, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateSquare={updateSquare}
                >
                  {square}
                </Square>
              )
            })
          }
        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
            </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
          
        <WinnerModal winner={winner} resetGame={resetGame} />
      
    </main>
  )
}

export default App
