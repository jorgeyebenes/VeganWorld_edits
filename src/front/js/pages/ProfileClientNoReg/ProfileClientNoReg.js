import React from 'react';
import { Navbar } from '../../component/NavBar/NavBar';
import './profileclientnoreg.css';

const ProfileClientNoReg = () => {
  return (
    <div className="profile_noreg_vistappal">
        <div className="profile_noreg_navbar">
            <NavBar />
        </div>

        <div className="profile_noreg_jumbotron">
          
            <h1>Hola Mr. Random!</h1>
            <img>Buddy Logo</img>
        </div>

        <div className="profile_noreg_header">
          <form>
            <h2>Name:</h2>
            <p>Your name here...</p>
            <br></br>
            <h2>Email:</h2>
            <p>Your email here...</p>
            <button>Edit</button>
            <button>Save</button>
            </form>
        </div>

        <div className="profile_noreg_gopremium">
          <h2>Would you like to customize your profile, but, post comments and engage with the community?</h2>
          <button>GO PREMIUM!</button>
        </div>
        <div className="profile_noreg_footer">
        <Footer />
        </div>
    </div>
  )
}

export default ProfileClientNoReg
