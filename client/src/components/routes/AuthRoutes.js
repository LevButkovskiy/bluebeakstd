import React from 'react';
import RequestView from "../RequestView";
import RequestParamView from "../RequestParamView";

function AuthRoutes() {
    return (
        <ul>
            <li className="request">
                <RequestView
                    method="POST"
                    url="/v1/auth"
                    description="Authorize user and returns token"
                >
                    <RequestParamView params={[{title: 'login', value: '[user-login]'}, {title: 'password', value: '[user-password]'}]}>Params</RequestParamView>
                </RequestView>
            </li>
        </ul>
    )
}

export default AuthRoutes;