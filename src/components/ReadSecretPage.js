import React, { Component } from 'react';
import ReadSecretComponent from './ReadSecretComponent'

class ReadSecretPage extends Component {

    state = {
        secret: undefined
    }

    onGetSecret = (secret) => {
        this.setState(() => ({secret}))
    }

    render() {

        return (
            <div>
                Here is your secret: 
                <ReadSecretComponent
                    key={this.props.match.params.key}
                    onGetSecret={this.onGetSecret}
                    secret={this.state.secret}
                />
            </div>
        );
    }
}

export default ReadSecretPage;
