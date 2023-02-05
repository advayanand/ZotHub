import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBCol, MDBIcon } from "mdbreact";
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../styles/SearchPage.css'
import trend from '../img/trend.png';

const Example = (props) => {
    const [outline, setOutline] = useState(false);
  
    const handleClick = () => {
      setOutline(!outline);
    };
  
    return (
      <Button 
        variant={outline ? 'outline-primary' : 'primary'} 
        onClick={handleClick}
      >
        {props.text}
      </Button>
    );
  };
  

const Tags = () => {
    return (
        <Container>
        <Row><h3 className="mini-heading">Check out these trending tags</h3></Row>

        <Row justify-content-center>
                <Col className ="d-flex align-items-start text-button" md={{ span: 2 }} >
                    <Example text="Volunteering"></Example>
                </Col>
                <Col className ="d-flex text-button" md={{ span: 2 }}>
                    <Example text="Sports"></Example>  
                </Col>
                <Col className ="d-flex text-button" md={{ span: 2 }}>
                    <Example text="Culture"></Example>  
                </Col>
                <Col className ="d-flex align-items-start text-button">
                    <Example text="Culinary"></Example>  
                </Col>

            </Row>
            <Row>
                <Col className ="d-flex text-button" md={{ span: 2 }}>
                    <Example text="Games"></Example>  
                </Col>
                <Col className ="d-flex text-button" md={{ span: 2}}>
                    <Example text="Academic"></Example>  
                </Col>
                <Col className ="d-flex text-button" md={{ span: 2}}>
                    <Example text="Professional"></Example>  
                </Col>
        </Row>

    
        </Container>
    );
}

const TrendingSearch = () => {
    return (
        <Container className="trendingSearch">
            <Row><h3 className="mini-heading">Recent and trending searches</h3></Row>
            <Row className="align-items-center"><Image src={trend} className="icon-img"  roundedCircle/><a className="mini-text">Extracurricular activities</a></Row>
            <Row className="align-items-center"><Image src={trend} className="icon-img"  roundedCircle/><a className="mini-text">Student Council</a></Row>
            <Row className="align-items-center"><Image src={trend} className="icon-img"  roundedCircle/><a className="mini-text">Music production club</a></Row>
        </Container>
    );
}




const SearchPage = (props) => {
    const [ searchQuery, setSearchQuery ] = useState('');

    const submitSearchQuery = async e => {
        e.preventDefault();

        // const searchResults = await searchhhhhhhhhhhhhh(searchQuery))))))))))))));
        console.log(`Submitting seach query: ${searchQuery}`);
    }
    
    return (
        <Container>
            <Container className="search-box">
                <h2 className="big-title">Explore The Campus</h2>
                <div className="input-group rounded">
                <input type="search" className="form-control rounded" 
                    placeholder="Search" aria-label="Search" 
                    aria-describedby="search-addon"
                    onChange={e => {console.log(e.target.value); setSearchQuery(e.target.value)}}
                    onSubmit={submitSearchQuery}
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            submitSearchQuery(e);
                        }
                    }}
                />
                <span className="input-group-text border-0" id="search-addon" onClick={submitSearchQuery}>
                    <i className="fas fa-search"></i>
                </span>
                </div>
            </Container>

            <Row>
                <Col lg = {6}>
                    <Tags />
                </Col>

                <Col lg = {6}>
                <TrendingSearch />
                </Col>

            </Row>
            </Container>
        
      );
}


export default SearchPage;