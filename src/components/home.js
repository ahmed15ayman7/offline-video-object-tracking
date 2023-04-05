import React  from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "./Card";
import AdvancedExample from "./Pagination";




const Home = ({details,Pagination,handlePageClick,onClickFilm}) => {

  let mapping = (e,i) => (
    <Link to={`/Familly-Movies/movie/${e.id}`} key={e.id} className='col-lg-3 col-md-4 col-6 mb-3' >
      <Card
      vote_count={e.vote_count}
      release_date={e.release_date}
        name={e.title}
        img={e.poster_path}
        details={e.overview}
        />
    </Link>
  );
  return (
    <Container className="mt-5 pt-5 ">

        

        <Row style={{justifyContent:'space-evenly'}} className='pb-5'>
        {details.length!==0?details.map(e=>mapping(e)):<Col className="text-white fs-1 mt-5 pt-5">There are no movies</Col>}
        </Row>
        <Row style={{justifyContent:'center'}} className='pb-5'>
          {details.length>=20?<AdvancedExample Pagination={Pagination} handlePageClick={handlePageClick} />:null}
        </Row>
        
    </Container>
  );
};
export default Home;
