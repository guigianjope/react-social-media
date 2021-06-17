import "./Header.css"
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            
            <div className="search-box">
                <form>
                    <input className="input-text" type="text" placeholder="Search..."/>
                    <input className="input-submit" type="submit" value="Search"/>
                </form>
            </div>
            <div className="profile-container">
                <img className="profile-picture" src={profile} alt="profile"/>
                <div className="profile-text-container">
                    <span className="profile-text">Sign In</span>
                </div>
            </div>
        </div>
    );
}