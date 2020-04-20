import React from 'react'
import Header from './Header'

const ReadSecretPage = (props) => (
    <div>
        <Header/>
        <div className="container">
            <div className="textForm">
                <label htmlFor="secretMessage">Secret Message</label>
                <p className="warning">
                    This message was destroyed<br />
                    You should save it
                </p>                <textarea
                className= "inputForm--message"
                readOnly
                value={props.message}
                />
            </div>
        </div>
    </div>
)

export default ReadSecretPage;
