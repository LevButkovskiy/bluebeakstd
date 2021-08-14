import React from 'react';
import RequestView from "../RequestView";
import RequestParamView from "../RequestParamView";

function UserRoutes() {
    return (
        <ul>
            <li>
                <RequestView
                    method="GET"
                    url="/v1/user/"
                    description="Returns all users"
                >
                    <RequestParamView params={[{title: 'build-token', value: '[your-build-token]'}]}>Headers</RequestParamView>
                </RequestView>
            </li>
            <li>
                <RequestView
                    method="GET"
                    url="/v1/user/:id"
                    description="Returns user by id"
                >
                    <RequestParamView params={[{title: 'build-token', value: '[your-build-token]'}]}>Headers</RequestParamView>
                    <RequestParamView params={[{title: 'id', value: '[user-id]'}]}>Params</RequestParamView>
                </RequestView>
            </li>
            <li className="request">
                <RequestView
                    method="POST"
                    url="/v1/user/"
                    description="Creates new user"
                >
                    <RequestParamView params={[{title: 'build-token', value: '[your-build-token]'}]}>Headers</RequestParamView>
                    <RequestParamView params={[{title: 'login', value: '[user-login]'}, {title: 'password', value: '[user-password]'}]}>Params</RequestParamView>
                </RequestView>
            </li>
            <li className="request">
                <RequestView
                    method="PUT"
                    url="/v1/user/:id"
                    description="Updates user by id"
                >
                    <RequestParamView params={[{title: 'build-token', value: '[your-build-token]'}]}>Headers</RequestParamView>
                    <RequestParamView params={[{title: 'id', value: '[user-id]'}]}>Params</RequestParamView>
                </RequestView>
            </li>
            <li className="request">
                <RequestView
                    method="DELETE"
                    url="/v1/user/:id"
                    description="Delete user by id"
                >
                    <RequestParamView params={[{title: 'build-token', value: '[your-build-token]'}]}>Headers</RequestParamView>
                    <RequestParamView params={[{title: 'id', value: '[user-id]'}]}>Params</RequestParamView>
                </RequestView>
            </li>
        </ul>
    )
}

export default UserRoutes;