import { TURNS } from "../constants"

export const Cell = ({ index, updateBoard, value, isSelected}) => {
    
    const className = `
        cell 
        ${isSelected ? 'is-selected' : ''}
        ${value === TURNS.RED ? 'red' : ''}
        ${value === TURNS.YELLOW ? 'yellow' : ''}
        `.trim()
    
    const handleClick = () => {
        typeof updateBoard === 'function' && updateBoard(index)
    }
    
    
    return (
        <div className={className} onClick={handleClick}/>
    )
}