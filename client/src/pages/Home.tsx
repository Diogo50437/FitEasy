import React, { Fragment } from 'react'
import { useAuth } from 'contexts/AuthContext'
import logo from 'assets/react.svg'
import 'styles/Home.css'

const ReactWelcome = () => {
    return (
      <Fragment>
        <img src={logo} className='ReactWelcome-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='ReactWelcome-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </Fragment>
    )
  }
  
const LoggedInStatus = () => {
    const { isLoggedIn, account } = useAuth()

    if (isLoggedIn && !!account) {
        return <p>Hey, {account.username}! I'm happy to let you know: you are authenticated!</p>
    }

    return <p>Don't forget to start your backend server, and then authenticate yourself.</p>
}

function Home() {
  return (
    <div className='Home'>
        <ReactWelcome/>
        <LoggedInStatus/>
    </div>
  )
}

export default Home