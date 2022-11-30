import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetProfile from "./useGetProfile";
import ProfileStyles from "./profile_styles";
import useDisableProfile from "./useDisableProfile";

const Profile = ({
    setIsSigned = () => {},
    userId = '',
    setError = () => {},
}) => {
    const[profile, setProfile] = useState({});
    const[loading, setLoading] = useState(true);

    const logoutProfile = () => {
        sessionStorage.removeItem("user_id")
        setIsSigned(false)
    }

    const GetProfile = async () => {
        setLoading(true)
        useGetProfile({
            userId: userId,
            setProfile: setProfile
        });
        setLoading(false)
    }

    const DisableProfile = async () => {
        setLoading(true)
        useDisableProfile({
            userId: userId
        });
        setLoading(false)
        logoutProfile();
    }

    useEffect(()=>{
        GetProfile()
    }, [Profile])

    return(
        <div style={ProfileStyles.ProfileCard}>
            <div>{profile.name}</div>
            <div>{profile.email}</div>
            <div>+{profile.country_code}-{profile.mobile_number}</div>
            <div><Link to="/" onClick={logoutProfile}> Log Out </Link></div>
            <div><Link to="/" onClick={DisableProfile}> Disable Account </Link></div>
        </div>
    );
}

export default Profile;