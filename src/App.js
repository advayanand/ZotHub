import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import SignUpPage from './pages/SignUpPage';
import { createBrowserRouter, RouterProvider, Routes, Route, Redirect } from 'react-router-dom';
import Header from './component/Header';
import SearchPage from './pages/SearchPage';
import useToken from './helpers/useToken';
import { useState } from 'react';


const imageUrl = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
const events = [
    {
      id: 1,
      eventName: 'Music Festival',
      eventInfo: 'A two-day music festival featuring top artists',
      clubName: 'Music Lovers Club',
      location: 'Central Park, NY',
      date: '2023-06-12'
    },
    {
      id: 2,
      eventName: 'Food and Wine Expo',
      eventInfo: 'A celebration of the best food and wine from around the world',
      clubName: 'Foodies Club',
      location: 'Moscone Center, San Francisco',
      date: '2023-07-18'
    },
    {
      id: 3,
      eventName: 'Book Fair',
      eventInfo: 'A gathering of book lovers, writers and publishers',
      clubName: 'Book Club',
      location: 'Washington Convention Center, DC',
      date: '2023-08-20'
    },
    {
      id: 4,
      eventName: 'Tech Conference',
      eventInfo: 'A conference for tech enthusiasts and professionals',
      clubName: 'Tech Club',
      location: 'Las Vegas Convention Center, NV',
      date: '2023-09-12'
    },
    {
      id: 5,
      eventName: 'Sports Expo',
      eventInfo: 'A celebration of sports and fitness',
      clubName: 'Sports Club',
      location: 'Los Angeles Convention Center, CA',
      date: '2023-10-01'
    },
    {
      id: 6,
      eventName: 'Art and Culture Festival',
      eventInfo: 'A festival showcasing art and culture from around the world',
      clubName: 'Art Club',
      location: 'Union Square, NY',
      date: '2023-11-05'
    },
    {
      id: 7,
      eventName: 'Outdoor Adventure Expo',
      eventInfo: 'An expo for outdoor enthusiasts and adventurers',
      clubName: 'Adventure Club',
      location: 'McCormick Place, Chicago',
      date: '2023-12-10'
    },
    {
      id: 8,
      eventName: 'Food Truck Festival',
      eventInfo: 'A festival featuring the best food trucks in the city',
      clubName: 'Foodies Club',
      location: 'Downtown, Seattle',
      date: '2023-01-15'
    },
    {
      id: 9,
      eventName: 'Comic Con',
      eventInfo: 'A convention for comic book fans and pop culture enthusiasts',
      clubName: 'Comic Book Club',
      location: 'San Diego Convention Center, CA',
      date: '2023-02-20'
    },
    {
      id: 10,
      eventName: 'Pet Expo',
      eventInfo: 'A celebration of all things pet-related',
      clubName: 'Pet Club',
      location: 'Miami Beach Convention Center, FL',
      date: '2023-03-15'
    }
  ];

const clubs = [
    {
      id: 1,
      name: "Photography Club",
      description: "A club for photography enthusiasts to share their passion and improve their skills.",
      email: "photoclub@gmail.com",
      school: "University of California, Los Angeles"
    },
    {
      id: 2,
      name: "Chess Club",
      description: "A club for chess players to come together, play and improve their game.",
      email: "chessclub@gmail.com",
      school: "Stanford University"
    },
    {
      id: 3,
      name: "Book Club",
      description: "A club for book lovers to read and discuss their favorite books.",
      email: "bookclub@gmail.com",
      school: "Harvard University"
    }
  ];



function App() {
  const [ user, setUser ] = useState({});
  const { token, setToken } = useToken();

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage setToken={setToken} />
    },
    {
      path: '/signup',
      element: <SignUpPage setToken={setToken} />
    },
    {
      path: '/home',
      element: <HomePage />
    },
    {
      path: '/user',
      element: <UserPage clubs={clubs} events={events} profileImgUrl={imageUrl} username="Peter Anteater" />
    },
    {
      path: '/search',
      element: <SearchPage />
    }
  ]);


  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
