const serverAdress = process.env.REACT_APP_POST_SECRET_API

export default (secret, onSecretPosted) => {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", serverAdress, true)
    xhr.setRequestHeader("Content-Type", "multipart/form-data")

    xhr.onreadystatechange = function() { 
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const shortUrl = JSON.parse(xhr.response).shortUrl
            onSecretPosted(shortUrl)
        }
    }
    
    xhr.send(JSON.stringify(secret))
}