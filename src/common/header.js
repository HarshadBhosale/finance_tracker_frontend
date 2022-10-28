import React, { useState } from "react";

const Header = () => {
    const[currentOption, setCurrentOption] = useState(null);

    return(
        <>
            <div>
                <h1>Harshosale</h1>
            </div>
        </>
    );
}

export default Header;