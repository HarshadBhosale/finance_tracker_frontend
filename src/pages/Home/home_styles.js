const HomeStyles = {
    HomeMessage : {
        display: "flex",
        height: "90%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        color: "OrangeRed",
        flexDirection: "column",
    },
    ProjectAbout : {
        margin: "10px",
        padding: "10px",
    },
    Heart : {
        color: "red",
        display: "inline-block",
        fontSize: "60px",
        // animation: "heart_animation infinite",
        animationDelay: "0.5s",
        animationDuration: "1.5s",
        animationIterationCount: "infinite",
    }
}

export default HomeStyles;

// @keyframes heart_animation {
//     0% {transform: scale(4);}
//     50%  {transform: scale(5);}
//    100% {transform: scale(4);}
// }