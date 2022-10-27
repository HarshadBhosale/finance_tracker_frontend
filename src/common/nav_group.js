import React, { useState } from "react";
import NavView from "./nav_view";
import NavOption from "./nav_option";

const NavGroup = () => {
    const[currentOption, setCurrentOption] = useState("");

    return(
        <>
            <div>
            <div>
                <NavOption setOption={setCurrentOption} />
            </div>

            <div>
                <NavView option={currentOption}/>
            </div>
            </div>
        </>
    );
}

export default NavGroup;