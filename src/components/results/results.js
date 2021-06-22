import React from 'react';
import ReactJson from "react-json-view";

class Result extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>{this.props.test.count}</h2>
                    <ReactJson id="json-pretty" src={this.props.test} />
                </div>
            </React.Fragment>
        )
    }
}

export default Result;