import { useState } from "react"

export function TwitterFollowCard ({userName, name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" alt='El avatar de Alex' src={imageSrc}/>
        <div className="tw-followCard-info">
          <strong className="tw-followCard-infoUser">{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-following-text">{text}</span>
            <span className="tw-following-stopFollowing">Dejar de seguir</span>
        </button>
      </aside>
    </article>
    )
}