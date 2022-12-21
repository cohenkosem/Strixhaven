import React from 'react';
import './Home.css';
import commons from './../../assets/Commons.png'
import Header from './../../components/Header.js'

const Home = () => {
  return (
    <div className="Home" style={{backgroundImage:`url(${commons})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <div className="page">
        <Header/>
        <div class="random" style={{height:"800px"}}>

        </div>
      </div>      
    </div>
  );
};
  
export default Home;