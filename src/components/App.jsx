import React, { useState, useEffect } from 'react'
import './App.css';
import { Form, Row, Col } from 'react-bootstrap'

const App = () => {

  const [start, setStart] = useState(10000)
  const [monthly, setMonthly] = useState(100)
  const [rate, setRate] = useState(0.05)
  const [time, setTime] = useState(10)
  const [profit, setProfit] = useState(0)

  const calculateProfit = () => {
    const n = 12
    let result = (start * (1 + rate/n) ** (n * time)) + (monthly * (((1 + rate / n) ** (n * time) - 1) / (rate / n)))
    setProfit(result.toFixed(0))
  }

  useEffect(() => {
    calculateProfit()
  })

  /*
Compounded interest + future value of series
P = Principal investment
PMT = Principal Monthly
r = interest rate
n = number of times interest is compounded
t = the time

( P(1+r/n)**(n*t) ) + ( PMT * (((1+r/n)**(n*t)-1) / (r/n)) )

*/

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
          <h1>{profit}</h1>
        </Row>
      </Form>
    </div>
  );
}


export default App;


