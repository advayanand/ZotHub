import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBCol, MDBIcon } from "mdbreact";
import Button from 'react-bootstrap/Button';


const Tags = () => {
    return (
        <Container>
        <Row>
                <Col>
                    <Button variant="outline-primary">Academic</Button>
                    <Button variant="outline-primary">Academic</Button>                
                    <Button variant="outline-primary">Academic</Button>
                    <Button variant="outline-primary">Academic</Button>                
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-primary">Academic</Button>
                    <Button variant="outline-primary">Academic</Button>                
                </Col>
        </Row>
        </Container>
    );
}

const TrendingSearch = () => {
    return (
        <Container>
            <Row>Student Council</Row>
            <Row>Debate Club</Row>
            <Row>Drama Club</Row>
            <Row>Model United Nations</Row>
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

            <Row>
                <Col lg = {2}>
                    <Tags />
                </Col>

                <Col lg = {2}>
                <TrendingSearch />
                </Col>

            </Row>
            </Container>
        
      );
}


export default SearchPage;