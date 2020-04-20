import React from 'react'
import Header from './Header'

const ReadSecretPage = (props) => (
    <div>
        <Header/>
        <div className="container">
            <div className="textForm">
                <label htmlFor="secretMessage">Secret Message</label>
                <p className="warning">
                    This message has been destroyed<br />
                    You should save it
                </p>                <textarea
                className= "inputForm--message"
                readOnly
                value={"Das ist der Test"}
                />
            </div>
        </div>
    </div>
)

export default ReadSecretPage;
