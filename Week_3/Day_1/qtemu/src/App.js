import { useState } from 'react';
import './App.css';
import MainSection from './templates/MainSection';
import MemberSection from './templates/MemberSection';
import PastSection from './templates/PastSection';

function App() {
  const [seeAllOrganizer,setSeeAllOrganizer] = useState(false)
  const organizers = [
  {
    name:"Adhy Wiranata",
    title:"Organizers"
  },
  {
    name:'Audy Pratama',
    title:"Tutors"
  },
  {
    name:'Agus Siswanto',
    title:"Student"
  },
  {
    name: 'Andika Yopi',
    title:"Student"
  },
  {
    name:'Riza Aji Setiawan',
    title:"Student"
  },
  {
    name:'Dea',
    title:"Student"
  },
  {
    name:'Leonardo Kurniawan',
    title:"Student"
  }]
  const pasts=[{
    date:'27 November 2017',
    desc:'#39 JakartaJS April Meetup with kumparan',
    visit: 139
  },
  {
    date:'27 October 2017',
    desc:'#39 JakartaJS April Meetup with BliBli',
    visit: 113
  },
  {
    date:'27 September 2017',
    desc:'#39 JakartaJS April Meetup with Hacktiv8',
    visit: 110
  }]
  return (
    <>
    <div className='navbar-container'>
      <div className="navbar">
          <h2>QTemu</h2>
          <a href="#">Create Meetup</a>
          <a href="#">Explore</a>
          <a href="#" className='login'>Login</a>
      </div>
    </div>
    <div className='container'>
      <div className="main-section">
        <MainSection/>
      </div>
      <div className="content-section">
        <h4>Next Meetup</h4>
        <div className="next-section">
          <p>Awesome meetup and event
            25 January 2019
            Hello, JavaScript & Node.js Ninjas!
            Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!
            The meetup format will contain some short stories and technical talks.
            If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.
            Remember to bring a photo ID to get through building security.
            See you there!
            Best,Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
          </p>
        </div>
        <h4>About Meetup</h4>
        <div className='about-section'>
          <p>
            Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.
            Twitter: @JakartaJS and we use the hashtag #jakartajs
          </p>
        </div>
        <div className='see-more'>
          <h4>Members</h4>
          <a  href="#" onClick={(e)=>
          {
            e.preventDefault();
            setSeeAllOrganizer(!seeAllOrganizer)
            }}>
              See all
          </a>
        </div>
        <MemberSection showMore={seeAllOrganizer} organizers={organizers}/>
        <div className='see-more'>
          <h4>Past Meetups</h4>
          <a href="#">See all</a>
        </div>
        <div className='past-section'>
          <PastSection pasts={pasts}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
