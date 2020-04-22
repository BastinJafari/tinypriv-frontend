import React from 'react';
import copy from 'copy-to-clipboard';

const ShortenedUrlPage = (props) => {


    const copyToClipBoard = () => {
        copy(props.shortUrl)
    }

    return (
    <div className="textForm">
        <label htmlFor="shortUrl">Link to message or url</label>
            <div className="shortUrlForm">
                <input
                    className="input--shortUrl"
                    id="shortUrl"
                    name="shortUrl"
                    readOnly
                    value={props.shortUrl}
                    style={{ fontWeight: "bold" }}
                />

                <button className="button--copy" onClick={copyToClipBoard}>Copy</button>
            </div>

    </div>)
}

export default ShortenedUrlPage;
