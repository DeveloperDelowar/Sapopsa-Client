import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../../images/sapopsa.png";
import close from "../../../images/close.svg";
import search from "../../../icons/search.png";
import user from "../../../icons/user.png";
import love from "../../../icons/love.png";
import bag from "../../../icons/bag.png";

const Navbar = () => {
    const [toggleClass, setToggleClass] = useState(false);
    const mediaSize = 991;

    const toggleNav = () => {
        setToggleClass(!toggleClass);
    }

    const navMenu = (event) => {
        if (event.target.hasAttribute("data-toggle") &&
            window.innerWidth <= mediaSize) {
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            // if menuItemHasChildren is already expanded, collapse it

            if(menuItemHasChildren.classList.contains("active")){

            }
            else{

            }
        }
    }

    return (
        <header className="header">
            <Link to='/'>
                <div className="notice">
                    <p className="noticeText">WELCOME TO OUR ONLINE STORE,NOTICES HERE......</p>
                </div>
            </Link>
            <div className="header-main">
                <div className="openMenu" onClick={toggleNav}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="logo">
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>

                <div className={`menu-overlay ${toggleClass ? 'active' : ''}`} onClick={toggleNav}>
                </div>
                {/* <!-- navigation menu start --> */}
                <nav className={`nav-menu ${toggleClass ? 'open' : ''}`} onClick={(e) => navMenu(e)}>

                    <div className="closeNavMenu" onClick={toggleNav}>
                        <img src={close} alt="close" />
                    </div>
                    <ul className="menu">
                        <li className="menuItem menuitemHasChildren">
                            <a href="#" data-toggle="subMenu">MEN <i className="fa-solid fa-angle-right"></i></a>
                            <ul className="subMenu">
                                <li className="menuItem"><a href="manst t-shirt.html">Men Polo Shirt</a></li>
                                <li className="menuItem"><a href="polo t-shirt.html">Men t-Shirt</a></li>
                                <li className="menuItem"><a href="polo t-shirt.html">Men Shirt</a></li>
                                <li className="menuItem"><a href="manst t-shirt.html">hoodie</a></li>
                                <li className="menuItem"><a href="polo t-shirt.html">sweater v-neck</a></li>
                                <li className="menuItem"><a href="polo t-shirt.html">men shorts</a></li>
                                <li className="menuItem"><a href="manst t-shirt.html">cargo Shorts</a></li>
                                <li className="menuItem"><a href="manst t-shirt.html">sweat shirt</a></li>
                                <li className="menuItem"><a href="manst t-shirt.html">track suit</a></li>
                                <li className="menuItem"><a href="manst t-shirt.html">jacket</a></li>
                                <li className="menuItem"><a href="manst t-shirt.html">sweater</a></li>
                            </ul>
                        </li>
                        <li className="menuItem menuitemHasChildren">
                            <a href="#" data-toggle="subMenu">woMEN <i className="fa-solid fa-angle-right"></i></a>
                            <ul className="subMenu">
                                <li className="menuItem"><a href="manst t-shirt.html">woMen t-Shirt</a></li>
                                <li className="menuItem"><a href="#">woMen Shirt</a></li>
                                <li className="menuItem"><a href="#">gardigan</a></li>
                                <li className="menuItem"><a href="#">hoodie</a></li>
                                <li className="menuItem"><a href="#">frock</a></li>
                                <li className="menuItem"><a href="#">skist</a></li>
                                <li className="menuItem"><a href="#">shirred dress</a></li>
                                <li className="menuItem"><a href="#">panafore</a></li>
                                <li className="menuItem"><a href="#">woman tops</a></li>
                            </ul>
                        </li>
                        <li className="menuItem menuitemHasChildren">
                            <a href="#" data-toggle="subMenu">SPORTS <i className="fa-solid fa-angle-right"></i></a>
                            <ul className="subMenu">
                                <li className="menuItem"><a href="#">jersy kit</a></li>
                                <li className="menuItem"><a href="#">sports t-shirt</a></li>
                                <li className="menuItem"><a href="#">sports shorts</a></li>
                                <li className="menuItem"><a href="#">Football Jersey</a></li>
                                <li className="menuItem"><a href="#">TROUSER</a></li>
                            </ul>
                        </li>
                        <li className="menuItem menuitemHasChildren">
                            <a className="moreB" href="#" data-toggle="subMenu">SALE <i className="fa-solid fa-angle-right"></i></a>
                        </li>
                        <li className="menuItem menuitemHasChildren">
                            <a className="moreB" href="#" data-toggle="subMenu">More <i className="fa-solid fa-angle-right"></i></a>
                            <ul className="subMenu">
                                <li className="menuItem"><a href="#">help</a></li>
                                <li className="menuItem"><a href="#">exchanges & returns</a></li>
                                <li className="menuItem"><a href="order-traker.html">order tracker</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* <!-- navigation menu end --> */}
                <div className="from">
                    <div className="search">
                        <input type="checkbox" id="check" />
                        <div className="usersNotify box user">
                            <label for="check">
                                <img src={search} alt="" />
                            </label>
                        </div>


                        <div className="seacrhBox">
                            <input className="input" type="search" placeholder="search..." />
                            <label for="" className="searchBtn">
                                <img type="submit" className="search" src={search} />
                            </label>

                        </div>


                        <div className="usersNotify user">
                            <a href="login.html"><img src={user} alt="" /><span className="notificaTion">1</span></a>
                        </div>
                        <div className="usersNotify love">
                            <a href="#"><img src={love} alt="" /><span className="notificaTion">1</span></a>
                        </div>

                        <div className="usersNotify">
                            <a href="cart.html"><img src={bag} alt="" /><span className="notificaTion">1</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;