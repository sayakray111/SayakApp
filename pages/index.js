import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import ProfileCard from '../components/ProfileCard'
import Link from 'next/link'
//import {Auth0Provider} from "react-router-dom"
const LinkA = ({ children, href }) =>
  <Link href={href}>
    <a className='pl-4 block pr-4 underline hover:text-white'>{children}</a>
  </Link>

function Home () {
  // set required to true to force the page to require login.
  const { user, loading } = useFetchUser({ required: false })
  const logEvent = async (type, value) => {
    const event = {
      name: user.nickname,
      type: type,
      value: value
      // date: added server side so we can't lie
    }
    await fetch(`${config.HOST}/api/events`, {
      method: 'post',
      body: JSON.stringify(event)
    })

    // TODO handle error if event cannot be posted.
    // TODO display feedback if event is ok
  }

  const handleClick = (e) => {
    // console.log(e.target)
    logEvent('click', 1)
  }
  
    
  function NormalUser() {
    {user && (
      <>
        <ProfileCard user={user}>
          <button className='btn-blue' onClick={handleClick}>Event</button>
        </ProfileCard>
        <h2>Reports</h2>
        <LinkA href='/report'>Report - useEffect</LinkA>
        <LinkA href='/reportSSR'>Report - SSR</LinkA>
        <LinkA href='/reportSWR'>Report - SWR</LinkA>
  
      </>)}
    return (
      <Layout user={user} loading={loading}>
        <h1>Normal User Login here</h1>
        <p>Here we have login for Normal user</p>
  
        {loading && <p>Loading login info...</p>}
        {user && (<span>Normal User</span>)}
        {!loading && !user && (
          <>
            <p>
              To view the dashboard <a href='/api/login'>Login</a>
            </p>
          </>
        )}
        
      </Layout>
    )

  }
  function BusinessUser(){
    {user && (
      <>
        <ProfileCard user={user}>
          <button className='btn-blue' onClick={handleClick}>Event</button>
        </ProfileCard>
        <h2>Reports</h2>
        <LinkA href='/report'>Report - useEffect</LinkA>
        <LinkA href='/reportSSR'>Report - SSR</LinkA>
        <LinkA href='/reportSWR'>Report - SWR</LinkA>
  
      </>)}
    return (
      <Layout user={user} loading={loading}>
        <h1>Business User Login here</h1>
        <p>Here we have login for Business User </p>
  
        {loading && <p>Loading login info...</p>}
        {user && (<span>Business User</span>)}
        {!loading && !user && (
          <>
            <p>
              To view the dashboard <a href='/api/login'>Login</a>
            </p>
          </>
        )}
        
      </Layout>
    )

  }
  
  return (
    <div>
      {user && user.sub.includes('github|') && (
        <NormalUser/>
      )}
      {user && user.sub.includes('google-oauth2|') && (
        <BusinessUser/>
      )}
    </div>
  )
}

export default Home 


