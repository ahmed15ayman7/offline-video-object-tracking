import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';

export const PageDetails = () => {
    let par=useParams()
    const [film, setFilm] = useState({}); 
    let filmDetials = async (id) => {
        let d = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=d69e391737d2c2aa19d8af3e39193efb&language=en-US`
            );
            setFilm(d.data)
        };
        filmDetials(par.id)

  return (
    <Container fluid className='mt-5 pt-5'>
        <Row style={{justifyContent:'space-evenly'}}>
        <Col lg={5} md={11} xs={11}>
            <img src={'https://image.tmdb.org/t/p/w500'+film.poster_path} alt='' className='img-fluid' style={{height:'50vh'}}/>
        </Col>
        <Col lg={6} md={11} xs={11} style={{display:'flex',flexDirection:'column',textAlign:'start',color:'#fff',justifyContent:'space-evenly'}} >
        <h1>{film.title}</h1>
        <h6>Release date: {film.release_date}</h6>
        <p>Ratings: {film.vote_count}</p>
        <p>details: {film.overview}</p>
        <div className='d-flex' style={{justifyContent:'space-evenly'}}>
            <Link to={'/Familly-Movies/'}><Button style={{backgroundImage: 'linear-gradient(50deg,rgb(112, 5, 206),rgb(80, 0, 35))',border:'none'}}> Go to Familly movies</Button></Link>
            {film.video===true?<Button style={{backgroundImage: 'linear-gradient(50deg,rgb(112, 5, 206),rgb(80, 0, 35))',border:'none'}}><a href={`${film.video}`} >Watch to movie</a> </Button>:null}
        </div>
        </Col>
        </Row>
    </Container>
  )
}
