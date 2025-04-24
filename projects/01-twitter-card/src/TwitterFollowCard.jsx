import { useState } from 'react'


export function TwitterFollowCard({ userName, name }) {
    const [isFollowing, setIsFollowing] = useState(false)

    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-card-button is-following' : 'tw-card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-card'>
    <header className='tw-card-header'>
        <img
            className='tw-card-avatar'
            src={imageSrc} 
            alt="el avatar de emebete" />
        <div className='tw-card-header-info'>
            <strong>{name}</strong>
            <span className='tw-card-infoUserName'>@{userName}</span>
        </div>
    </header>

    <aside>
        <button className={buttonClassName} onClick={handleClick}>
            {text}
        </button>
    </aside>
   </article>
    )
}