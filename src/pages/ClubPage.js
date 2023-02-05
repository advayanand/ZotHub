import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import { matchRoutes, useLocation } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { addClub, removeClub } from '../controllers/usersController';
import { getOneClub } from "../controllers/clubsController";
import { FaHeart } from 'react-icons/fa';
import useToken from "../helpers/useToken";

const ClubComponent = ({ token, club_id, name, logo, description }) => {
    const [ likedState, setLikedState ] = useState(false);

    const onClick = () => {
        if (likedState) {
            setLikedState(false);
            const res = removeClub(token, club_id);
        } else {
            setLikedState(true);
            const res = addClub(token, club_id);
        }
    }

    return (
        <div style={styles.container}>
            <img src={logo} alt={`Logo for ${name}`} style={styles.logo} />
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.description}>{description}</p>
            <button style={styles.likeButton} onClick={onClick}>
                <FaHeart />
            </button>
        </div>
    )
};
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: '0 0 10px #ccc',
    },
    logo: {
      width: '100px',
      height: '100px',
      marginBottom: '1rem',
    },
    name: {
      margin: 0,
      fontSize: '1.2rem',
    },
    description: {
      margin: '0.5rem 0',
      fontSize: '0.8rem',
      textAlign: 'center',
    },
    likeButton: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontSize: '1.5rem',
      padding: 0,
    },
};

const ClubPage = (props) => {
    
    // const routes = [{ path: "/club/:club_id" }]
    // const useCurrentPath = () => {
    //     const location = useLocation()
    //     const [{ route }] = matchRoutes(routes, location)
        
    //     return route.path
    // }

    const match = useMatch('/:school/club/:club_id')
    const school = match.params.school;
    const club_id = match.params.club_id;
    const { token, setToken } = useToken();
    console.log(token);
    const [ club, setClub ] = useState({
        name: '',
        imageURL: '',
        description: ''
    });

    useEffect(() => {
        const res = getOneClub(school, club_id);
        const club_info = res.data;
        setClub({
            ...club_info
        });
    }, []);

    return (
        <Container>
            <ClubComponent token={token} club_id={club_id} name={club.name} logo={club.imageURL} description={club.description} />
        </Container>
    )
}

export default ClubPage;