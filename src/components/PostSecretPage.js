import React, { Component } from 'react'
import UrlAndMessageForms from './UrlAndMessageForms'
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
                        <UrlAndMessageForms onSecretPosted={this.onSecretPosted}/>
                    }
                </div>
            </div>
        );
    }
}

export default PostSecretPage;


