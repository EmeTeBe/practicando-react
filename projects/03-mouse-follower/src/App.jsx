import { useEffect, useState } from 'react'


const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
    window.addEventListener('pointermove', handleMove)
    }

    return () => {
        window.removeEventListener('pointermove', handleMove)
      }
    
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        opacity: 0.6,
        pointerEvents: 'none',
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -20,
        top: -20,
      }}></div>

      <button onClick={() => setEnabled(!enabled)}>

        {enabled ? 'Desactivar' : 'Activar'} Seguir puntero

      </button>
    </>
  )
}

function App() {
  
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
