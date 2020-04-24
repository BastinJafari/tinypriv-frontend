const serverAdress = process.env.REACT_APP_GET_SECRET_API

const sendReadReceipt = (key) => {
    let xhr = new XMLHttpRequest()

    try {
        xhr.open("DETE", `${serverAdress}/`, true)
        xhr.setRequestHeader("Content-Type", "multipart/form-data")

        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                return JSON.parse(xhr.response).deletionSuccess
            }
        }

        xhr.send(JSON.stringify({key}))
    } catch (error) {
        return error
    }

}

export default (key, onGetSecret) => {
    let xhr = new XMLHttpRequest()
    
    try {
        xhr.open("GET", `${serverAdress}/?key=${key}`)

        xhr.onload = () => {
            const secret = JSON.parse(xhr.response)
            onGetSecret(secret)
            sendReadReceipt(key)
        }
    
        xhr.send()

    } catch (error) {
        return error
    }
}