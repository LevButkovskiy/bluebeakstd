import React from 'react';
import './RequestParamView.css'

function RequestParamView(props) {
    const {params} = props;

    const renderParams = (item, index) => {
        return <blockquote key={index}>{item.title}:{item.value}</blockquote>
    }

    return (
        <div className="requestParams">
            <span className="requestParamsTitle">{props.children}</span><br/><br/>
            <div className="requestParamsList">
                <code>
                    {'{'}
                    {params.map(renderParams)}
                    {'}'}
                </code>
            </div>
        </div>
    )
}

export default RequestParamView;