import React from 'react'
import Header from './Header'
import Footer from './Footer'

const ReadSecretPage = (props) => (
    <div>
        <Header/>
        <div className="container">
            <div className="textForm">
                <label htmlFor="secretMessage">Secret Message</label>
             <textarea
                className= "inputForm--message"
                readOnly
                value={props.message}
                />
            </div>
            <p className="warning">
                    This message has been destroyed<br />
                    You should save it
            </p>   
        </div>
        <Footer/>
    </div>
)

export default ReadSecretPage;
