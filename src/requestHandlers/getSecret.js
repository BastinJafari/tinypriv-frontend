const serverAdress = 'http://localhost:8000'

export default (key, onGetSecret) => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", serverAdress + `/${key}`)
    
    xhr.onload = () => {
        onGetSecret(xhr.response)
        
    }

    xhr.send()
}