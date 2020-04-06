import React, { Component } from 'react';
import getSecret from '../utils/requestHandlers/getSecret'
import ReadSecretPage from './ReadSecretPage'
class ForwardOrMessage extends Component {

    state = {
        message: ''
    }

    onGetSecret = (secret) => {
        const message = secret.message
        console.log(secret.message)
        if (!message) {
            window.location.replace("http://" + secret.url)
        } else {
            this.setState(({ message }))
        }
    }

    componentDidMount() {
        getSecret(this.props.match.params.secretKey, this.onGetSecret)
    }

    render() {
        return (
            <div>
                {this.state.message && <ReadSecretPage message={this.state.message}/>}
            </div>
            
        );
    }
}

export default ForwardOrMessage;
