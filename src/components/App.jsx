import React, { useState, useEffect } from 'react'
import './App.css';
import logo from '../assets/logo.png'
import { Form, Row, Col, } from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider'

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
        <Row className="justify-content-center">
          <h1 className="header" >RENTERS RENTER</h1>

        </Row>
        <Row className="justify-content-center">
          <img className="logo" src={logo} alt="logo"/>
        </Row>
        <Row>
          <Col>
            <Form.Label>Startbeløb</Form.Label>
            <RangeSlider value={start} max="1000000" tooltip="off"
              onChange={(event) => { setStart(event.target.value) }}
              className="start" variant="dark" step={1000} />
            <Form.Text>{start.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} kr.</Form.Text>
          </Col>
          <Col>
            <Form.Label>Månedlig opsparing</Form.Label>
            <RangeSlider value={monthly} max="50000" tooltip="off"
              onChange={(event) => { setMonthly(event.target.value) }}
              className="monthly" variant="dark" step={100} />
            <Form.Text>{monthly.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} kr.</Form.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Årligt afkast</Form.Label>
            <RangeSlider tooltip="off" variant="dark"
              onChange={(event) => { setRate(event.target.value / 100) }} className="interest" />
            <Form.Text>{(rate * 100).toFixed(0)} %.</Form.Text>
          </Col>
          <Col>
            <Form.Label>Tidshorisont</Form.Label>
            <RangeSlider tooltip="off" variant="dark" max="60"
              onChange={(event) => { setTime(event.target.value) }} className="time" placeholder="År" />
            <Form.Text>{time} år.</Form.Text>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <h4>Samlet opsparing efter {time} år:</h4>
        </Row>
        <Row className="justify-content-center">
          <h1 className="profit" >{profit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} kr.</h1>
        </Row>
      </Form>
    </div>
  );
}


export default App;


