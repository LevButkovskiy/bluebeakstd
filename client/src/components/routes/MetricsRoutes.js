import React from 'react';
import RequestView from "../RequestView";
import RequestParamView from "../RequestParamView";

function MetricsRotes() {
    return (
        <ul>
            <li>
                <RequestView
                    title="Server perfomance"
                    method="GET"
                    url="/v1/health/"
                >
                    <RequestParamView
                        params={
                            [
                                {title: 'GET https://api.bluebeakstd.ru/v1/health'},
                                {title: 'Result', value: '\n\n' +
                                        '{\n' +
                                        '    "success": "true"\n' +
                                        '}\n'},
                            ]
                        }>Example</RequestParamView>
                </RequestView>
            </li>
            <li>
                <RequestView
                    title="API Version"
                    method="GET"
                    url="/v1/version/"
                >
                    <RequestParamView
                        params={
                            [
                                {title: 'GET https://api.bluebeakstd.ru/v1/version'},
                                {title: 'Result', value: '\n\n' +
                                        '{\n' +
                                        '    "success": "true"\n' +
                                        '    "version": "1.0.3"\n' +
                                        '}\n'},
                            ]
                        }>Example</RequestParamView>
                </RequestView>
            </li>
        </ul>
    )
}

export default MetricsRotes;