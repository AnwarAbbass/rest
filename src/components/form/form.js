import React from 'react';
import './form.scss';
import axios from "axios";

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            api: '',
            method: '',
        };
        this.api = '';
        this.method = '';
    }

    handleInput = (e) => {
        e.preventDefault();
        this.api = e.target.value;
        // this.setState({ api:  });
    }

    handleClick = async e => {
        e.preventDefault();
        this.setState({ api: this.api ,method: this.method || 'GET'});
        let apiResult = await axios({
            method: 'get',
            url: 'https://swapi.dev/api/people',
          })
        console.log('.............. ', apiResult.headers);
        console.log();
        const count = apiResult.data.count ;
        const results = apiResult.data.results;
        const headers = apiResult.headers;
        const isHaveData = (apiResult.data.results)? true : false;
          console.log((apiResult.data.results));
        this.props.handler(results,count,headers,isHaveData);
    }

    

    methodHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.method = e.target.value ;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick} >
                    <input onChange={this.handleInput}/>

                    <input type="submit" value="GO"/>
                    <br></br>
                    <button value={`GET`} onClick={this.methodHandler}>GET</button>
                    <button value={`POST`} onClick={this.methodHandler}>POST</button>
                    <button value={`PUT`} onClick={this.methodHandler}>PUT</button>
                    <button value={`DELETE`} onClick={this.methodHandler}>DELETE</button>

                </form>

                <br></br>
                <div>
                    <p>
                        {this.state.method} &nbsp;

                        {this.state.api}
                    </p>
                    {this.method = ''}
                    {this.api = ''}
                </div>
            </div>
        );
    }
}

export default Form;