import React from 'react';
import './RequestView.css'

function RequestView(props) {
    return (
        <>
            <hr/>
            <div className="request">
                <div className='requestTitle'>{props.title}</div>
                <span className={`method ${props.method}`}>{props.method}</span>
                <span className="requestUrl">{props.url}</span>
                {/*<span className="requestDescription">{props.description}</span>*/}
                <div className="requestContent">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default RequestView;