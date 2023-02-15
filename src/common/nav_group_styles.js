const NavGroupStyles = {
    Group : {
        display: "flex",
        height: "88%",
    },
    Options : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 10px 20px 10px",
    },
    LinkOptions : {
        backgroundColor: "#0049B7",
        color: "#ff1d58",
        textDecoration: "none",
        fontSize: "20px",  
        width: "120px",
        textAlign: "center",
        border: "2px solid rgba(0, 0, 0, 0.8)",
        borderRadius: "20px",
        margin: "1px 2px 0px 2px",
    },
    Views : {
        color: "DeepPink",
        width: "100%",
        textAlign: "center",
        backgroundColor: "blue",
        overflow: "scroll",
        border: "2px solid Red",
        borderRadius: "20px",
        marginRight: "10px",
    },
    AddTransaction: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "2",
    },
    Plus: {
        height: "6em",
        width: "6em",
        fontSize: "1em",
    },
    Circle: {
        position: "relative",
        width: "60px",
        height: "60px",
        borderRadius: "100%",
        backgroundColor: "Aqua",
        border: "solid 5px Blue",
    },
    Horizontal : {
        position: "absolute",
        backgroundColor: "Fuchsia",
        width: "30px",
        height: "8px",
        top: "26px",
        left: "15px",
    },
    Vertical : {
        position: "absolute",
        backgroundColor: "Fuchsia",
        width: "8px",
        height: "30px",
        top: "15px",
        left: "26px",
    }
}

export default NavGroupStyles;