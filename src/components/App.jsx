import React from 'react'
import './App.css';
import { Form, Row, Col } from 'react-bootstrap'

class App extends React.Component {
  state = {
    start: 0,
    monthly: 0,
    rate: 0,
    time: 0,
  }
  calculateProfit = () => {

  }

  render() {


    return (
      <div>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Startbelob" />
            </Col>
            <Col>
              <Form.Control placeholder="Månedlig opsparing" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control placeholder="Årligt afkast" />
            </Col>
            <Col>
              <Form.Control placeholder="Tidshorisont" />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default App;

/*
Compounded interest + future value of series
P = Principal investment
PMT = Principal Monthly
r = interest rate
n = number of times interest is compounded
t = the time

( P(1+r/n)**(n*t) ) + ( PMT * (((1+r/n)**(n*t)-1) / (r/n)) )

*/
