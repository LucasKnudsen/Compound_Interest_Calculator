import React, { useState, useEffect } from 'react'
import './App.css';
import { Form, Row, Col } from 'react-bootstrap'

const App = () => {

  const [start, setStart] = useState(25000)
  const [monthly, setMonthly] = useState(2000)
  const [rate, setRate] = useState(0.07)
  const [time, setTime] = useState(20)
  const [profit, setProfit] = useState(0)

  const calculateProfit = () => {
    const n = 12
    let result = (start * (1 + rate / n) ** (n * time)) + (monthly * (((1 + rate / n) ** (n * time) - 1) / (rate / n)))
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
            <Form.Label>Start belöb</Form.Label>
            <Form.Control onChange={(event) => { setStart(event.target.value) }} className="start" placeholder="Kroner" />
            <Form.Text>{start.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') } kr.</Form.Text>
          </Col>
          <Col>
            <Form.Label>Månedlig opsparing</Form.Label>
            <Form.Control onChange={(event) => { setMonthly(event.target.value) }} className="monthly" placeholder="Kroner" />
            <Form.Text>{monthly.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') } kr.</Form.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Årligt afkast</Form.Label>
            <Form.Control onChange={(event) => { setRate(event.target.value / 100) }} className="interest" placeholder="%" />
            <Form.Text>{rate.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') } %.</Form.Text>
          </Col>
          <Col>
            <Form.Label>Tidshorisont</Form.Label>
            <Form.Control onChange={(event) => { setTime(event.target.value) }} className="time" placeholder="År" />
            <Form.Text>{time.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') } år.</Form.Text>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <h1 className="profit" >{profit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} kr.</h1>
        </Row>
      </Form>
    </div>
  );
}


export default App;


