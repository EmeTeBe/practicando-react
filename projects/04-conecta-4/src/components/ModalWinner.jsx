import { Cell } from './Cell.jsx'

export const ModalWinner = ({ winner, resetGame }) => {
    if (winner === null) return null

    return (
        <section className="modalWinner">
            <div className="modalText">

                <h2>
                    {winner === false ? 'Empate' : 'Ganó:'}
                </h2>

                <header className="win">
                    {winner && <Cell value={winner} />}
                </header>

                <footer>
                  <button onClick={resetGame}>Reiniciar</button>
                </footer>

                </div>
         </section>
    )
}