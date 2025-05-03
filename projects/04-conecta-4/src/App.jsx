import { useState } from 'react'
import { COLS, ROWS, TURNS } from './constants.js'
import { Cell } from './components/Cell.jsx'
import { checkWinner, checkGameOver } from './logic/board.js'
import './index.css'
import { ModalWinner } from './components/ModalWinner.jsx'


function App() {
  //inicializamos el tablero con un array de 42 posiciones (6 filas x 7 columnas)
  const [board, setBoard] = useState(Array.from({length: ROWS * COLS}, () => null))
  //inicializamos el turno con el jugador 1 (🔴)
  const [turn, setTurn] = useState(TURNS.RED)

  //inicializamos el ganador con null
  const [winner, setWinner] = useState(null)



 const resetGame = () => {
    setBoard(Array.from({length: ROWS * COLS}, () => null))
    setTurn(TURNS.RED)
    setWinner(null)
  }
 

 const updateBoard = (index) => {
    const newBoard = [...board] //clonamos tablero
    const column = index % COLS //obtenemos la columna


    //buscamos la primera posicion vacia de la columna
    for (let i = ROWS - 1; i >= 0; i--) {
      const cellIndex = i * COLS + column //obtenemos el index de la celda
      if (newBoard[cellIndex] === null) {
        index = cellIndex //actualizamos el index
        break
      } 
    }
    //si esa posicion ya tiene una ficha, no hacemos nada
    if (newBoard[index] !== null) return


    //colocamos la ficha del turno actual
    newBoard[index] = turn
    setBoard(newBoard)

    //cambiamos el turno
    const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED
    setTurn(newTurn)

    //chequeamos si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkGameOver(newBoard)) {
      setWinner(false) // empate
    }
 }
 
 
 
  return (
    <main className="board">
      
      <h1>Conecta 4</h1>

      <button onClick={resetGame}>Reiniciar</button>

      <section className="gameGrid">
        {
        board.map((cell, index) => (
          <Cell
            key={index}
            index={index}
            updateBoard={updateBoard}
            value={cell}
          />
        ))
        }
      </section>

      <section className="turn">
        <Cell value={TURNS.RED} isSelected={turn === TURNS.RED}/>
        <Cell value={TURNS.YELLOW} isSelected={turn === TURNS.YELLOW}/>
      </section>

      <ModalWinner winner={winner} resetGame={resetGame} />
        
    </main>
  )
}

export default App
