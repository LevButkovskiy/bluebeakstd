import React from 'react';
import './RequestParamView.css'

function RequestParamView(props) {
    const {params} = props;

    const renderParams = (item, index) => {
        if(item.title && item.value) {
            return <blockquote className={item.non_required && 'non-required'} key={index}>{item.title}:{item.value}</blockquote>
        }
        else if(item.title || item.value) {
            return <blockquote className={item.required && 'non-required'} key={index}>{item.title || item.value}</blockquote>
        }
    }

    return (
        <div className="requestParams">
            <span className="requestParamsTitle">{props.children}</span><br/><br/>
            <div className="requestParamsList">
                <code>
                    {params.map(renderParams)}
                </code>
            </div>
        </div>
    )
}

export default RequestParamView;