import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated as a } from "react-spring";
import auth0 from '../lib/auth0'
import Link from 'next/link'
import Layout from '../components/layout'
import RenderButton from '../components/RenderButton'
import RenderButton2 from '../components/RenderButton2'
//import Link from 'next/link'

function Home() {
  return (
    <ul>
            <Layout>
                <article style={{height: "100vh"}}>
                    <div className= "max-w-full min-h-full" style ={ { backgroundImage: "url(background.jpg)", backgroundSize: "cover"} }>
                        <h1 className="font-mono text-center" style= {{fontSize: "4rem", color: "white", paddingTop: "5em"}}>Design and development</h1>
                        <br /><br />
                        <div className="flex justify-center">
                            <RenderButton className="btn btn-blue" style={{margin: "2rem"}}>ORDER FOOD</RenderButton>
                            <RenderButton2 className="btn btn-blue" style={{margin: "2rem"}}>uniFOOD for Business</RenderButton2>
                        </div>
                    </div>
                
                </article>
            </Layout>
    </ul>
    
  )
}

export default Home

