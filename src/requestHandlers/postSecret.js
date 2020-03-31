const serverAdress = 'http://localhost:8000'

export default (secret, onSecretPosted) => {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", serverAdress, true)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")

    xhr.onreadystatechange = function() { 
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            onSecretPosted(xhr.response)
        }
    }
    
    xhr.send(JSON.stringify(secret))
}