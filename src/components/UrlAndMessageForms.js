import React from 'react';
import postSecret from '../utils/requestHandlers/postSecret';
import {useFormik} from 'formik'
import validate from '../utils/validate'

const UrlAndMessageForms = (props) => {

    const formik = useFormik({
        initialValues: {
            url: '',
            message: ''
        },
        validate,
        onSubmit: (values) => {
            postSecret(values, props.onSecretPosted)
        }
    })

    return (
        <div className="urlAndMessageForms">
            <form onSubmit={formik.handleSubmit}>
                <div className="inputForm--url">
                    <label htmlFor="url">Url</label>
                    <input 
                        id="url"
                        name="url"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.url}
                    />
                    {formik.touched.url && formik.errors.url ? (
                        <div>{formik.errors.url}</div>
                    ): null}
                </div>


                <div className="inputForm--message">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        values={formik.values.message}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
 

export default UrlAndMessageForms;
