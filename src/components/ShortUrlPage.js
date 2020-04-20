import React from 'react';

const ShortenedUrlPage = (props) => {


    const copyToClipBoard = () => {
        navigator.clipboard.writeText(props.shortUrl)
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
