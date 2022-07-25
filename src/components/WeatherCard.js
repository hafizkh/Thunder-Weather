import React from 'react'
import { Card, Button } from 'react-bootstrap'

const WeatherCard = (props) => {
return(
    <div >

      <Card style={{ borderRadius: '1rem', height: '20rem' }} className= 'mt-3'>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>City: </Card.Title>
          <Card.Text><p>Temp:</p></Card.Text>
          <Card.Text><p>WeatherText:</p></Card.Text>
          
        </Card.Body>
      </Card>

    </div>
  )
}

export default WeatherCard
