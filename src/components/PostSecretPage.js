import UrlAndMessagePage from './UrlAndMessagePage'
import ShortUrlPage from './ShortUrlPage'
import Header from './Header'
import { Redirect } from 'react-router-dom'


import React, { Component } from 'react';


class PostSecretPage extends Component {

    state={
        shortUrl: ''
    }

    onSecretPosted = (shortUrl) => {
        this.setState({shortUrl})
    }

    onResetPage = () =>{
        this.setState({shortUrl: ''})
    }

    render() {
        return (
            <div>
                <Header onResetPage={this.onResetPage}/>
                <div className="container">
                    {this.state.shortUrl ?
                    <ShortUrlPage shortUrl={this.state.shortUrl}/> :
                    <UrlAndMessagePage onSecretPosted={this.onSecretPosted} />
                }
                </div>
            </div>
        )
    }
}

export default PostSecretPage;

