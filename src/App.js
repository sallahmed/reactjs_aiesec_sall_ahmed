import React, { Component } from 'react';
import sortBy from "lodash/sortBy";
import logo from './logo.svg';
import view_img from './view.png';
import edit_img from './edit.png';
import delete_img from './delete.png';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

function view(cell, row) { return ( <a href={ "view/" + cell }><img src={view_img} alt="View todo" /></a> ); }
function edit(cell, row) { return ( <a href={ "edit/" + cell }><img src={edit_img} alt="Edit todo" /></a> ); }
function del(cell, row) { return ( <a href={ "delete/" + cell }><img src={delete_img} alt="Delete todo" /></a> ); }

class App extends Component {
  
	constructor(props) {
  	super(props);
  	this.state = { todos: [], result: '' };
	}

  componentDidMount() {
  	axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
  		const todos = res.data;
      this.setState({todos: todos});
  	})
	}

  handleClick() {
    this.setState({
      result: this.inputField.value.trim().split(',')
    });
  }

  render() {
    const rows = sortBy(this.state.todos, "title");
    return (
  		<div className="App">
    		<header className="App-header col-md-12">
      		<img src={logo} className="App-logo" alt="logo" />
      		<h1 className="App-title">Welcome to React</h1>
    		</header>
        <div id="input-div" className="col-md-12 border">
          <h1>1- FORM INPUT</h1>
          <input ref={(input)=>{this.inputField = input}} type="text" />
          <button id="btn-click" onClick={this.handleClick.bind(this)}>Process</button>
          <span>
            <ul>
              {Object.keys(this.state.result).map((key) => (
                <li>{this.state.result[key]}</li>
              ))}
            </ul>
          </span>
        </div>
        <div className="col-md-12 border">
          <h1>2- TODOS LIST</h1>
          <BootstrapTable data={rows} pagination version='4'>
            <TableHeaderColumn isKey width="70%" headerAlign='center' dataField='title' dataSort={true} dataAlign='left'>Product Title</TableHeaderColumn>
            <TableHeaderColumn width="10%" headerAlign='center' dataField='id' dataFormat={ view } dataAlign='center'>View</TableHeaderColumn>
            <TableHeaderColumn width="10%" headerAlign='center' dataField='id' dataFormat={ edit } dataAlign='center'>Edit</TableHeaderColumn>
            <TableHeaderColumn width="10%" headerAlign='center' dataField='id' dataFormat={ del } dataAlign='center'>Delete</TableHeaderColumn>
          </BootstrapTable>
        </div>
        <div className="col-md-12 border">
          <h1>3- FORM LOGIN</h1>
        </div>
  		</div>
  	);
	}
}

export default App;