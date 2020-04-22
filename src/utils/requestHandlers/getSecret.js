const serverAdress = process.env.REACT_APP_GET_SECRET_API + "/getSecret?key="

export default (key, onGetSecret) => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", serverAdress + `${key}`)
    
    xhr.onload = () => {
        const secret = JSON.parse(xhr.response)
        onGetSecret(secret)
    }

    xhr.send()
}