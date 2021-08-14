import React from 'react';
import './RequestView.css'

function RequestView(props) {
    return (
        <div className="request">
            <span className="requestMethod">{props.method}</span>
            <span className="requestUrl">{props.url}</span>
            <span className="requestDescription">{props.description}</span>
            <div className="requestContent">
                {props.children}
            </div>
        </div>
    )
}

export default RequestView;