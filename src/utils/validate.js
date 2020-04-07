import isURL from 'validator/lib/isURL';

export default (values) => {
    const errors = {}

    if (!values.url) {
        errors.url = 'Required'
    } else if (!isURL(values.url)) {
        errors.url = 'Invalid url '
    }

    return errors
}

