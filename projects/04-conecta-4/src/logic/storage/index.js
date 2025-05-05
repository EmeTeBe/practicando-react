export const saveGameToStorage = (board, turn) => {
  // Guardar el tablero y el turno en el almacenamiento local
  localStorage.setItem('board', JSON.stringify(board))
  localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  // Reiniciar el almacenamiento local
  localStorage.removeItem('board')
  localStorage.removeItem('turn')
}