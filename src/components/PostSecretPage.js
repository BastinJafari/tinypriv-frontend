import React, { Component } from 'react'
import PostSecretForm from './PostSecretForm'
import ShortenedUrl from './ShortenedUrl'

class PostSecretPage extends Component {

    state = {
        secretPosted: false,
        shortenedUrl: ''
    }

    onSecretPosted = (shortenedUrl) => {
        this.setState(() => ({
            secretPosted: true,
            shortenedUrl
        }))
    }

    render() {
        return (
            <div>
                {this.state.secretPosted ? 
                    <ShortenedUrl shortenedUrl={this.state.shortenedUrl}/> :
                    <PostSecretForm onSecretPosted={this.onSecretPosted}/>
                }
            </div>
        );
    }
}

export default PostSecretPage;


