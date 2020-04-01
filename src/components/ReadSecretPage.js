import React, { Component } from 'react';
import ReadSecretComponent from './ReadSecretComponent'
import getSecret from '../requestHandlers/getSecret'

class ReadSecretPage extends Component {

    state = {
        message: ''
    }

    onGetSecret = (secret) => {
        const message = secret.message
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
                {"Here is your secret:" && this.state.message  }
            </div>
        );
    }
}

export default ReadSecretPage;
