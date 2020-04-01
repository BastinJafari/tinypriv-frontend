import React, { Component } from 'react';
import postSecret from '../requestHandlers/postSecret';

class AddSecretForm extends Component {
    state = {
        message: '',
        url: ''
    }

    onMessageChange = (e) => {
        const message = e.target.value
        this.setState(() => ({ message }))
    }

    onUrlChange = (e) => {
        const url = e.target.value
        this.setState(() => ({ url }))
    }

    onPostSecret = (e) => {
        const secret = this.state
        postSecret(secret, this.props.onSecretPosted)
    }

    render() {
        return (
            <div>
                <h2>Url:</h2>
                <input
                    autoFocus
                    onChange={this.onUrlChange}
                    placeholder="Add an url"
                    type="url"
                 />
                <h2>Message:</h2>
                <textarea
                    onChange={this.onMessageChange}
                    placeholder="Attach a message to your shortened url (optional)"
                    value={this.state.message}
                />

                <button onClick={this.onPostSecret}>Get shortened url</button>
            </div>
        );
    }
}

export default AddSecretForm;
