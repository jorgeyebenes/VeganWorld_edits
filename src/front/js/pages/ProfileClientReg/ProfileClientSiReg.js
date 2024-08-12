import React from 'react';
import { Navbar } from '../../component/NavBar/NavBar';
import './profilesireg.css';


const ProfileClientSiReg = () => {
  return (
    <div clasName="profile_sireg_vistappal">
        <div className="profile_sireg_navbar">
            <NavBar />
        </div>

        <div className="profile_sireg_jumbotron">
            <img>Background Image</img>
            <h1>HOLA JORGE!</h1>
            <h2>Happy Quote Generator</h2>
            
        </div>

        <div className="profile_sireg_header">
            <img>Profile round-pic-avatar</img>
            <button>Upload new profile pic</button>
            <form>
                <h2>Name:</h2>
                <h2>Email:</h2>
                <h2>About Me:</h2>
                <button>Edit Info</button>
                <button>Save</button>
            </form>
        </div>

        <div className="profile_sireg_lowerbox">
            <div className="profile_sireg_favs">
                <Favourites />
             </div>

             <div className="profile_sireg_feedbacks">
                <Feedbacks />
             </div>
        </div>

        <div className="profile_sireg_footer">
            <Footer />
        </div>



    </div>

  );
};

export default ProfileClientSiReg
