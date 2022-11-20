import { useState } from 'react';
import './App.css';

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
        <img src="" width="250px" height="250px"/>
        <div className="main-desc">
          <h2>Hacktiv8 Meetup</h2>
          <div className='list'>
            <div className="label">
              <span>Location</span>
              <span>Members</span>
              <span>Organizers</span>
            </div>
            <div className="data">
              <span>Jakarta, Indonesia</span>
              <span>1,078</span>
              <span>Adhy Wiranata</span>
            </div>
          </div>
          <div className='button'>
            Join Us
          </div>
        </div>
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
        {seeAllOrganizer ? (
          organizers.map((dt,idx)=>{
            return (
              <div key={idx} className="member-section">
                <img src="" width="50px" height="50px"/>
                <div className='member-details'>
                  <b>{dt?.title}</b>
                  <div className='detail'>
                    <span>{dt?.name}</span>
                  </div>
                </div>
              </div>
          )})
        ):(
          <div className="member-section">
              <img src="" width="50px" height="50px"/>
              <div className='member-details'>
                <b>Organizers</b>
                <div className='detail'>
                  <span>Adhy WIranata</span>
                  <span>{organizers?.length} others.</span>
                </div>
              </div>
            </div>
        )}
        <div className='see-more'>
          <h4>Past Meetups</h4>
          <a href="#">See all</a>
        </div>
        <div className='past-section'>
          {pasts.map((dt,idx)=>{
            return (
              <div key={idx} className='past'>
                <b>{dt?.date}</b>
                <hr/>
                <b>{dt?.desc}</b>
                <span><b>{dt?.visit}</b> went</span>
                <div className='button'>View</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
