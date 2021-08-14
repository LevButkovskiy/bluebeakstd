import React from 'react';
import RequestView from "../RequestView";

function MetricsRotes() {
    return (
        <ul>
            <li>
                <RequestView
                    method="GET"
                    url="/v1/health/"
                    description="Returns all users"
                >
                </RequestView>
            </li>
            <li className="request">
                <RequestView
                    method="POST"
                    url="/v1/version/"
                    description="Creates new user"
                >
                </RequestView>
            </li>
        </ul>
    )
}

export default MetricsRotes;