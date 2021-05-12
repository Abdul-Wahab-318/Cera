import './Header.css';
import logo from '../../assets/logo.png'
import downArrow from '../../assets/down-arrow.svg';
import globe from '../../assets/globe.svg';
import user from '../../assets/user.svg';
import heart from '../../assets/heart.svg';
import chat from '../../assets/conversation.svg';
import dollar from '../../assets/dollar.svg'
import cross from '../../assets/x-mark.svg'
import menuCross from '../../assets/cancel.svg';
function Header()
{
    let replaceMenuIcon = ()=>{
       let navbarToggler = document.querySelector('#navbarToggler');
       navbarToggler.classList.toggle('navbar-toggler-cross-icon');
    }
    return(
        <header>
            <div className="header-parent">
                <div className="header-inner">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <button className="navbar-brand" href="#"><img src={logo} alt="" /></button>
                        <button className="navbar-toggler" onClick={replaceMenuIcon}   type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon" id="navbarToggler"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <button className="nav-link " aria-current="page" href="#">Home <img src= {downArrow} alt="" /></button>
                            <ul className="sub-menu">
                                <li><button>Homepage</button></li>
                                <li><button>Dashboard</button></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <button className="nav-link" href="#">Community <img src= {downArrow} alt="" /></button>
                            <ul className="sub-menu">
                                <li><button><img src={heart} alt="" />Social wall</button></li>
                                <li className="sub-menu-inner">
                                    <button><img src={globe} alt="" />Members</button>
                                    <img src={downArrow} alt="" />
                                    <ul className="sub-menu">
                                        <li><button>Members directory</button></li>
                                        <li><button>Swipe Members</button></li>
                                        <li><button>Search Members</button></li>
                                    </ul>
                                </li>
                                <li><button><img src={user} alt="" />Groups</button></li>
                                <li><button><img src={chat} alt="" />Forums</button></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <button className="nav-link" href="#">Membership <img src= {downArrow} alt="" /></button>
                            <ul className="sub-menu">
                                <li><button><img src={dollar} alt="" /> Pricing plans</button></li>
                                <li><button><img src={cross} alt="" /> Restricted content</button></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <button className="nav-link" href="#">More <img src= {downArrow} alt="" /></button>
                            <ul className="sub-menu">
                                <li><button>Dashboard page</button></li>
                                <li><button>Wiki</button></li>
                                <li><button>News</button></li>
                                <li><button>Password protected page</button></li>
                                <li><button>Gutenberg blocks</button></li>
                                <li><button>404 page</button></li>
                            </ul>
                            </li>
                        </ul>
                        <button className="login-btn">Login</button>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;