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
import Recommendation from './pages/Recommendation';
import { InputGroup } from 'react-bootstrap';

//we may use this https://serpapi.com/playground?q=Las+Vegas+Convention+Center%2C+NV&tbm=isch&ijn=0
const imageUrl = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
const events = [
    {
      id: 1,
      eventName: 'Music Festival',
      eventInfo: 'A two-day music festival featuring top artists',
      clubName: 'Music Lovers Club',
      location: 'Central Park, NY',
      date: '2023-06-12',
      imgurl: "https://lh3.googleusercontent.com/p/AF1QipONBSS_6ZUKRibSpk3bH9kV1lwWhQS9_jrVUrBw=s1360-w1360-h1020",
    },
    {
      id: 2,
      eventName: 'Food and Wine Expo',
      eventInfo: 'A celebration of the best food and wine from around the world',
      clubName: 'Foodies Club',
      location: 'Moscone Center, San Francisco',
      date: '2023-07-18',
      imgurl:"https://lh3.googleusercontent.com/p/AF1QipMv3D84V1AGIQ2C1W5sTbIkexGLnF-hb-8hobMV=s1360-w1360-h1020"
    },
    {
      id: 3,
      eventName: 'Book Fair',
      eventInfo: 'A gathering of book lovers, writers and publishers',
      clubName: 'Book Club',
      location: 'Washington Convention Center, DC',
      date: '2023-08-20',
      imgurl:"https://washington.org/sites/default/files/exterior-of-walter-e-washington-convention-center-at-night_ddc-photo.jpg"
    },
    {
      id: 4,
      eventName: 'Tech Conference',
      eventInfo: 'A conference for tech enthusiasts and professionals',
      clubName: 'Tech Club',
      location: 'Las Vegas Convention Center, NV',
      date: '2023-09-12',
      imgurl:"https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://lasvegas.simpleviewcrm.com/images/listings/original_LVCC-WH-Entrance-OptB_JeffGreen_April-2021_86A553A6-EEA2-AB11-39337D11F666639F-86a552abee02db1.jpg",
    },
    {
      id: 5,
      eventName: 'Sports Expo',
      eventInfo: 'A celebration of sports and fitness',
      clubName: 'Sports Club',
      location: 'Los Angeles Convention Center, CA',
      date: '2023-10-01',
      imgurl:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/c8/c6/2f/los-angeles-convention.jpg?w=1200&h=-1&s=1"
    },
    {
      id: 6,
      eventName: 'Art and Culture Festival',
      eventInfo: 'A festival showcasing art and culture from around the world',
      clubName: 'Art Club',
      location: 'Union Square, NY',
      date: '2023-11-05',
      imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/4a/1_new_york_city_union_square_2010.JPG"
    },

  ];

  const events2 = [
    {
      id: 8,
      eventName: 'Food Truck Festival',
      eventInfo: 'A festival featuring the best food trucks in the city',
      clubName: 'Foodies Club',
      location: 'Downtown, Seattle',
      date: '2023-01-15',
      imgurl:"https://uploads.visitseattle.org/2017/02/30115610/IMG_1491.jpg"
    },
    {
      id: 9,
      eventName: 'Comic Con',
      eventInfo: 'A convention for comic book fans and pop culture enthusiasts',
      clubName: 'Comic Book Club',
      location: 'San Diego Convention Center, CA',
      date: '2023-02-20',
      imgurl:"https://www.sandiego.org/-/media/images/sdta-site/meetings/convention-center/sdcc-johnbahu-cover1800x788.jpg?bc=white&h=750&w=1000&c=1"
    },
    {
      id: 10,
      eventName: 'Pet Expo',
      eventInfo: 'A celebration of all things pet-related',
      clubName: 'Pet Club',
      location: 'Miami Beach Convention Center, FL',
      date: '2023-03-15',
      imgurl:"https://images.adsttc.com/media/images/5192/55ba/b3fc/4b8d/f000/005b/large_jpg/MBS_Image_by_BIG_01.jpg?1368544661"
    }
  ];


const clubs = [
    {
      id: 1,
      name: "Photography Club",
      description: "A club for photography enthusiasts to share their passion and improve their skills.",
      email: "photoclub@gmail.com",
      school: "University of California, Los Angeles",
      imgurl:"https://www.birdvilleschools.net/cms/lib/TX01000797/Centricity/Domain/7305/camera.png"
    },
    {
      id: 2,
      name: "Chess Club",
      description: "A club for chess players to come together, play and improve their game.",
      email: "chessclub@gmail.com",
      school: "Stanford University",
      imgurl:"https://bloximages.newyork1.vip.townnews.com/thesheridanpress.com/content/tncms/assets/v3/editorial/6/de/6dee86ee-1fa3-11ec-b222-6f065f6e6b06/6151dc2c99964.hires.jpg"
    },
    {
      id: 3,
      name: "Book Club",
      description: "A club for book lovers to read and discuss their favorite books.",
      email: "bookclub@gmail.com",
      school: "Harvard University",
      imgurl:"https://images-cdn.reedsy.com/discovery/post/142/featured_image/187b2b29826e2ccf7eb2d88d65d8f1e756259fb5.jpg"
    }
  ];


//   const slides = [
//     {
//       id: 1,
//       image: '',
//       caption: 'Slide 1'
//     },
//     {
//       id: 2,
//       image: '',
//       caption: 'Slide 2'
//     },
//     {
//       id: 3,
//       image: '',
//       caption: 'Slide 3'
//     },
// ];
const slides = events.slice(2);


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
      element: <HomePage slides={slides} items={events} items2={events2} />
    },
    {
      path: '/user',
      element: <UserPage clubs={clubs} events={events} profileImgUrl={imageUrl} username="Peter Anteater" />
    },
    {
      path: '/search',
      element: <SearchPage />
    },
    {
      path: '/recommendation',
      element: <Recommendation />
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
