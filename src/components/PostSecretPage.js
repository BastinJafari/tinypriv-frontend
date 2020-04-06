import React, { Component } from 'react'
import PostSecretForm from './PostSecretForm'
import ShortenedUrl from './ShortenedUrl'
import Header from '../components/Header'

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
                <Header/>
                <div className="container">
                    {this.state.secretPosted ? 
                        <ShortenedUrl shortenedUrl={this.state.shortenedUrl}/> :
                        <PostSecretForm onSecretPosted={this.onSecretPosted}/>
                    }
                </div>
            </div>
        );
    }
}

export default PostSecretPage;


