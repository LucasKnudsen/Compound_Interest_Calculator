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

  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control onChange={(event) => {setStart(event.target.value)} } className="start" placeholder="Startbelob" />
          </Col>
          <Col>
            <Form.Control onChange={(event) => {setMonthly(event.target.value)} } className="monthly" placeholder="Månedlig opsparing" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control onChange={(event) => {setRate(event.target.value/100)} } className="interest" placeholder="Årligt afkast" />
          </Col>
          <Col>
            <Form.Control onChange={(event) => {setTime(event.target.value)} } className="time" placeholder="Tidshorisont" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <h1 className="result" >{profit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} kr.</h1>
        </Row>
      </Form>
    </div>
  );
}


export default App;


