import "./Header.css"
import logo from "../assets/logo.png";

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
        </div>
    );
}