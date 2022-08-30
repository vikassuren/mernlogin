import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>welcome Everyone </h1>
            <h2>Contact details phone-7979900498</h2>
            <h3>https://facebook.github.io/create-react-app/docs/running-tests</h3>
            <h4>https://www.linkedin.com/in/vikas-suren-823a71233</h4>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage