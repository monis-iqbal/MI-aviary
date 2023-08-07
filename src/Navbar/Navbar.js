import Logo_navbar from "../images/Logo_navbar.png"
import "./Navbar.css"


function Navbar() {
    return (
        <div id="navbar_div">
        <div id="pic_div">
            <img src={Logo_navbar} id="Nav_pic"/>
        </div>
        <div id="Nav_button_div">
            <span className="nav_btn"><b>Home</b></span>
            <span className="nav_btn"><b>Dove</b></span>
            <span className="nav_btn"><b>Love birds</b></span>
            <span className="nav_btn"><b>Java</b></span>
        </div>
        </div>
        // <div className="navbar">
        //     <div className="logo">
        //         <img src={Logo_navbar} alt="Logo"  id="pic"/>
        //     </div>
        //     <div className="navbar-buttons">
        //         <button>Button 1</button>
        //         <button>Button 2</button>
        //         <button>Button 3</button>
        //         <button>Button 4</button>
        //     </div>
        // </div>
    )
};
export default Navbar;