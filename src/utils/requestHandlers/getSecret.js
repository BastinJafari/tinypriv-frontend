const serverAdress = process.env.REACT_APP_GET_SECRET_API + "/getSecret?key="

export default (key, onGetSecret) => {
    console.log("KEY THAT GOT TO GET SECRET: " + key)
    let xhr = new XMLHttpRequest()
    console.log(serverAdress + `${key}`)
    xhr.open("GET", serverAdress + `${key}`)
    
    xhr.onload = () => {
        const secret = JSON.parse(xhr.response)
        console.log("response: " + secret.url)
        onGetSecret(secret)
    }

    xhr.send()
}