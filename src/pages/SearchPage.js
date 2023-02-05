import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBCol, MDBIcon } from "mdbreact";
import Button from 'react-bootstrap/Button';
import '../styles/SearchPage.css'



const Tags = () => {
    return (
        <Container>
        <Row><h3 className="mini-heading">Check out these trending tags</h3></Row>

        <Row justify-content-center>
                <Col className ="d-flex align-items-start text-button" md={{ span: 2 }} >
                    <Button variant="outline-primary">Volunteering</Button>
                </Col>
                <Col className ="d-flex text-button" md={{ span: 2 }}>
                    <Button variant="outline-primary">Sports</Button>  
                </Col>
                <Col className ="d-flex text-button" md={{ span: 2 }}>
                    <Button variant="outline-primary">Culture</Button>
                </Col>
                <Col className ="d-flex align-items-start text-button">
                    <Button variant="outline-primary">Sports</Button>
                </Col>

            </Row>
            <Row>
                <Col className ="d-flex text-button" md={{ span: 2 }}>
                    <Button variant="outline-primary">Games</Button>                
                </Col>
                <Col className ="d-flex text-button" md={{ span: 2}}>
                    <Button variant="outline-primary">Academic</Button>                
                </Col>
        </Row>

    
        </Container>
    );
}

const TrendingSearch = () => {
    return (
        <Container className="trendingSearch">
            <Row><h3 className="mini-heading">Recent and trending searches</h3></Row>
            <Row><a className="mini-text">Extracurricular activities</a></Row>
            <Row><a className="mini-text">Student Council</a></Row>
            <Row><a className="mini-text">Music production club</a></Row>
            <Row><a className="mini-text">Hackathon in Janurary</a></Row>
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