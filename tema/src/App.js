import React from 'react';
import './App.css';

import Menu from './components/menu';
import Exe1 from './components/exe1';
import Exe2 from './components/exe2';
import Exe3 from './components/exe3';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const inputValues = [
  'A1', 'B1', 'C1',
  'A1', 'B1', 'C2',
  'A1', 'B1', 'C3',
  'A1', 'B2', 'C4',
  'A1', 'B2', 'C5',
  'A1', 'B3', 'C6',
  'A2', 'B4', 'C7',
  'A2', 'B5', 'C8',
  'A2', 'B5', 'C9',
  'A3', 'B6', 'C10'
  // , 'Y1', 'Z9', 'X3'
  // , 'B6', 'C10', 'Y1'
  // , 'C10', 'Y1', 'Z6'
  // , 'X2', 'A5', 'B3'
  // , 'C6', 'Y3', 'Z2'
  // , 'X7', 'B5', 'C3'
  // , 'Y6', 'C10', 'Y1'
  // , 'Z3', 'Z1', 'X6'
]
//        /\
//        |
//        |
//       Test random values

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: [],
      uniqueValues: [],
      buttons: [],
      selectChecker: {}
    }
  }

  componentDidMount() {
    let buttons = [];
    inputValues.forEach(e => {
      if (!buttons.includes(e[0])) buttons.push(e[0])
    })

    let rows = [];
    for (let i = 0; i < inputValues.length; i += 3) {
      rows.push([inputValues[i], inputValues[i + 1], inputValues[i + 2]])
    }

    this.setState({
      rows: rows,
      buttons: buttons,
    })
  }

  render() {
    return (
      <Router>
        <div className="App">


          <Switch>
            <Route exact path='/' >
              <Container>
                <Menu />
              </Container>
            </Route>

            <Route path='/exe1' >
              <Container>

                <Menu />


                <Row>
                  <Exe1 />
                </Row>
              </Container>
            </Route>



            <Route path='/exe2' >
              <Container>
                <Menu />
                <Col>
                  <Exe2 rows={this.state.rows} buttons={this.state.buttons} />
                </Col>
                /</Container>
            </Route>



            <Route path='/exe3' >

              <Exe3 />

            </Route>



          </Switch>
        </div>
      </Router >
    );
  }
}
