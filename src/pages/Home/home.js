import React from "react";
import HomeStyles from "./home_styles";

const Home = () => {
    return(
        <div style={HomeStyles.HomeMessage}>
            <div style={HomeStyles.ProjectAbout}>
                Finance Tracker for better financial management
            </div>

            <div>
                Made with&nbsp;<p style={HomeStyles.Heart}>&hearts;</p>&nbsp;by harshosale. 
            </div>
        </div>
    );
}

export default Home;