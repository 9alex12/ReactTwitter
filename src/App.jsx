import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
const users = [
  {
    name: 'Alexander Rincon',
    userName: 'marsDev',
    initialIsFollowing: false,
  },
  {
    name: 'Pablo Hernandez',
    userName: 'pabloHernandez',
    initialIsFollowing: false,
  },
  {
    name: 'Jesus Jordan',
    userName: 'jesus',
    initialIsFollowing: false,
  },
]

  return (
    <div className='containerCards'>
      {users?.map((user) => {
        const {name, userName, initialIsFollowing} = user
        return(
          <TwitterFollowCard 
            name={name}
            userName={userName}
            initialIsFollowing={initialIsFollowing}
          />
        )
      })
      }
    </div>
  )
}