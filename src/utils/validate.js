import isURL from 'validator/lib/isURL';

export default (values) => {
    const errors = {}
    if (!values.url) {
        errors.url = 'Required'
    } else if (!isURL(values.url)) {
        errors.url = 'Invalid url '
    } else if (values.message?.length > 1000) {
        errors.message = 'Message too long '
    } else if (values.submitted) {
        errors.submitted = 'Not yet submitted '
    } 
    return errors
}

