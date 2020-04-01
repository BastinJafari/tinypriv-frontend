const serverAdress = 'http://localhost:8000'

export default (key, onGetSecret) => {
    console.log("KEY THAT GOT TO GET SECRET: " + key)
    let xhr = new XMLHttpRequest()
    xhr.open("GET", serverAdress + `/${key}`)
    
    xhr.onload = () => {
        const secret = JSON.parse(xhr.response)
        console.log("response: " + secret.url)
        onGetSecret(secret)
    }

    xhr.send()
}