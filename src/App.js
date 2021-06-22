import React from 'react';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';
import Result from './components/results/results.js';
import If from './components/if/if.js';
import Else from './components/if/else';
import IfLoad from './components/if/ifload';
import History from './components/history/history';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      count: 0,
      headers: {},
      isHaveData: false,
      history: localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [],
      loading: false,
    }
  }

  handleForm = (result, count, headers, isHaveData) => {
    this.setState({ result, count, headers, isHaveData });
  }

  toggle = () => {
    this.setState({ loading: !this.state.loading })
  }

  handelLocalStorage = (date) => {
    let x = 0
    this.state.history.forEach(result => {
      if (date.url === result.url && date.method === result.method) {
        x = 1
      }
    })
    if (!x) {
      this.setState({ history: [...this.state.history, date] })
      localStorage.setItem('history', JSON.stringify(this.state.history))
    }
    this.setState({ history: [...this.state.history] });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handleForm} saveHistory={this.handelLocalStorage} toggle={this.toggle} />
        <If condition={this.state.result}>
          <Result test={this.state} />

          {/* <History></History> */}
        </If>
        <Else condition={this.state.result}>
          <IfLoad Loadcondition={this.state.loading}>
            <div className="load"></div>
          </IfLoad>

        </Else>
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;
