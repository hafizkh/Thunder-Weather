import React from 'react'
import { Card } from 'react-bootstrap'

const WeatherCard = (props) => {
return(
    <div >

      <Card style={{ borderRadius: '1rem', height: '20rem' }} className= 'mt-3'>
        <Card.Img variant="top" src="" style={{width: 'auto', height: '5rem'}} />
        <Card.Body>
          <Card.Title>City: </Card.Title>
          <Card.Text><strong>Temp:</strong></Card.Text>
          <Card.Text><strong>WeatherText:</strong></Card.Text>
          
        </Card.Body>
      </Card>

    </div>
  )
}

export default WeatherCard
