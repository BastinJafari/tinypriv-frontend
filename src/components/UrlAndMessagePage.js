import React from 'react';
import postSecret from '../utils/requestHandlers/postSecret';
import { useFormik } from 'formik'
import validate from '../utils/validate'

const UrlAndMessagePage = (props) => {



    const formik = useFormik({
        initialValues: {
            url: '',
        },
        validate,
        onSubmit: (values) => {
            postSecret(values, props.onSecretPosted)
        }
    })
    return (

        <form
            className="textForm"
            onSubmit={formik.handleSubmit}>
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
                    <div className="error">{String.fromCharCode(10006) + formik.errors.url}</div>
                ) : null}
            </div>


            <div className="inputForm--message">
                <div className="label--message-container">
                    <label className="label--message" htmlFor="message">Message</label>
                    <button className="button--help"> ? </button>
                </div>
                <textarea
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? (
                    <div className="error">{String.fromCharCode(10006) + formik.errors.message}</div>
                ) : null}
            </div>


            <button disabled={formik.isSubmitting} className="button--submit" type="submit">Submit</button>
        </form>

    )
}


export default UrlAndMessagePage;
