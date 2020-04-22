import React from 'react'
import Header from './Header'

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
    </div>
)

export default ReadSecretPage;
