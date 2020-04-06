export default (values) => {
    const errors = {}

    if (!values.url) {
        errors.url = 'Required'
    } else if (!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(values.url)) {
        errors.url = 'Invalid url '
    }

    return errors
}

