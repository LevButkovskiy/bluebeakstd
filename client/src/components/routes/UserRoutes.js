import React from 'react';
import RequestView from "../RequestView";
import RequestParamView from "../RequestParamView";

function UserRoutes() {
    return (
        <ul>
            <li>
                <RequestView
                    title="Get all Users"
                    method="GET"
                    url="/v1/users/"
                >
                    <RequestParamView params={[{title: 'api-token', value: '[your-api-token]'}]}>Headers</RequestParamView>
                    <RequestParamView
                        params={
                            [
                                {title: 'GET https://api.bluebeakstd.ru/v1/users'},
                                {title: 'Result', value: '\n\n[\n' +
                                        '    {\n' +
                                        '        "role": "admin",\n' +
                                        '        "_id": "610051888f630a8209d61eb6",\n' +
                                        '        "login": "adminLogin",\n' +
                                        '        "email": "e@mail.com"\n' +
                                        '    },\n' +
                                        '    {\n' +
                                        '        "role": "member",\n' +
                                        '        "_id": "510051444f421n3395d61eb6",\n' +
                                        '        "login": "memberLogin",\n' +
                                        '        "email": "e_mail@mail.com"\n' +
                                        '    },\n' +
                                        '    ...\n' +
                                        ']'},
                            ]
                        }>Example</RequestParamView>
                </RequestView>
            </li>
            <li>
                <RequestView
                    title="Get User"
                    method="GET"
                    url="/v1/user/:id"
                >
                    <RequestParamView params={[{title: 'api-token', value: '[your-api-token]'}]}>Headers</RequestParamView>
                    <RequestParamView params={[{title: 'id', value: '[user-id]'}]}>Params</RequestParamView>
                    <RequestParamView
                        params={
                            [
                                {title: 'GET https://api.bluebeakstd.ru/v1/users/610051888f630a8209d61eb6'},
                                {title: 'Result', value: '\n\n' +
                                    '{\n' +
                                    '    "role": "admin",\n' +
                                    '    "_id": "610051888f630a8209d61eb6",\n' +
                                    '    "login": "login",\n' +
                                    '    "email": "e@mail.com"\n' +
                                    '}\n'},
                            ]
                        }>Example</RequestParamView>
                </RequestView>
            </li>
            <li>
                <RequestView
                    title="Create User"
                    method="POST"
                    url="/v1/user/"
                >
                    <RequestParamView params={[{title: 'api-token', value: '[your-api-token]'}]}>Headers</RequestParamView>
                    <RequestParamView
                        params={
                            [
                                {title: 'login', value: '       [String]'},
                                {title: 'password', value: '    [String]'},
                                {title: 'email', value: '       [String]', non_required: true},
                                {title: 'role', value: '        [Enum: admin | member]', non_required: true},
                                {title: 'photoPath', value: '   [URL]', non_required: true}
                            ]
                        }>Body</RequestParamView>
                    <RequestParamView
                        params={
                            [
                                {title: 'POST https://api.bluebeakstd.ru/v1/users/'},
                                {title: 'Result', value: '\n\n' +
                                        '{\n' +
                                        '    "role": "admin",\n' +
                                        '    "_id": "610051888f630a8209d61eb6",\n' +
                                        '    "login": "login",\n' +
                                        '    "encryptedPassword": "$2b$10$.805jKSOzc37JeNwtA9RJuVUXR8xWiVmhJxe9Lx5Rlnz/b.FoHG2u",\n' +
                                        '    "email": "e@mail.com"\n' +
                                        '}\n'},
                            ]
                        }>Example</RequestParamView>
                </RequestView>
            </li>
            <li>
                <RequestView
                    title="Update User"
                    method="PUT"
                    url="/v1/user/:id"
                >
                    <RequestParamView params={[{title: 'api-token', value: '[your-api-token]'}]}>Headers</RequestParamView>
                    <RequestParamView params={[{title: 'id', value: '[user-id]'}]}>Params</RequestParamView>
                    <RequestParamView
                        params={
                            [
                                {title: 'email', value: '       [String]', non_required: true},
                                {title: 'role', value: '        [Enum: admin | member]', non_required: true},
                                {title: 'photoPath', value: '   [URL]', non_required: true}
                            ]
                        }>Body</RequestParamView>
                    <RequestParamView
                        params={
                            [
                                {title: 'PUT https://api.bluebeakstd.ru/v1/users/610051888f630a8209d61eb6'},
                                {title: 'Result', value: '\n\n' +
                                        '{\n' +
                                        '    "role": "admin",\n' +
                                        '    "_id": "610051888f630a8209d61eb6",\n' +
                                        '    "login": "login",\n' +
                                        '    "email": "e@mail.com"\n' +
                                        '}\n'},
                            ]
                        }>Example</RequestParamView>
                </RequestView>
            </li>
            <li>
                <RequestView
                    title="Delete User"
                    method="DELETE"
                    url="/v1/user/:id"
                >
                    <RequestParamView params={[{title: 'api-token', value: '[your-api-token]'}]}>Headers</RequestParamView>
                    <RequestParamView params={[{title: 'id', value: '[user-id]'}]}>Params</RequestParamView>
                    <RequestParamView
                        params={
                            [
                                {title: 'DELETE https://api.bluebeakstd.ru/v1/users/610051888f630a8209d61eb6'},
                                {title: 'Result', value: '\n\n' +
                                        '{\n' + '\n' + '}\n'},
                            ]
                        }>Example</RequestParamView>
                </RequestView>
            </li>
        </ul>
    )
}

export default UserRoutes;