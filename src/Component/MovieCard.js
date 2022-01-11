import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Rate from './Rate';
import {Link} from "react-router-dom";

function MovieCard({movie}) {
    return (
        <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
     <Link to ={`/details/${movie.id}`}>  <Button>Details</Button>    </Link>    
            </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
