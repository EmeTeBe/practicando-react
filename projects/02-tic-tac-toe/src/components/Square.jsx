
export const Square = ({ children, isSelected, updateSquare, index }) => {
  
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => {
      updateSquare(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }