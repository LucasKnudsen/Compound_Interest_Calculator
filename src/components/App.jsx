import React, { useState } from 'react'
import './App.css';
import { Form, Row, Col } from 'react-bootstrap'

const App = () => {

  const [start, setStart] = useState(0)
  const [monthly, setMonthly] = useMeState(0)
  const [rate, setRate] = useState(0)
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)

  calculateProfit = () => {
    const n = 12

  }

  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control className="start" placeholder="Startbelob" />
          </Col>
          <Col>
            <Form.Control className="monthly" placeholder="Månedlig opsparing" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control className="interest" placeholder="Årligt afkast" />
          </Col>
          <Col>
            <Form.Control className="time" placeholder="Tidshorisont" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <h1></h1>
        </Row>
      </Form>
    </div>
  );
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
