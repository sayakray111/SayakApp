import React from "react"
import Layout from '../components/layout'

// React Components can be very very terse

class landing extends React.Component {

    render() {
        return (
            <Layout>
                <article style={{height: "100vh"}}>
                    <div className= "max-w-full min-h-full" style ={ { backgroundImage: "url(background.jpg)", backgroundSize: "cover"} }>
                        <h1 className="font-mono text-center" style= {{fontSize: "4rem", color: "white", paddingTop: "5em"}}>FOOD AT YOUR CONVINIENCE</h1>
                        <br /><br />
                        <div className="flex justify-center">
                            <button className="btn btn-blue" style={{margin: "2rem"}}>ORDER FOOD</button>
                            <button className="btn btn-blue" style={{margin: "2rem"}}>uniFOOD for Business</button>
                        </div>
                    </div>
                
                </article>
            </Layout>
        )
    }
}

export default landing

