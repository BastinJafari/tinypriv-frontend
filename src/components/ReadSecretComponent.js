import React from 'react';
import getSecret from '../requestHandlers/getSecret'

const ReadSecretComponent = (props) => {
    return (
        <div>
            {
                props.secret ?     
                props.secret :
                !getSecret(
                    props.key,
                    props.onGetSecret
                )
                 &&  "Loading"
            } 
        </div>
    );
}

export default ReadSecretComponent;
