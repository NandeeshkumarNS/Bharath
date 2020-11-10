import React, { useState } from 'react'
import Logo from '../../Images/Logo.jpeg'
import { Link } from 'react-router-dom'
import 'react-dropdown/style.css';
import useStyles from "./styles";
import DropDown from './ServiceDropDown/DropDown'
import DataDropDown from './OurDataDropDown/DataDropDown'
import NewLogo from '../../Images/NewLogo.jpeg'


export default function Navbar() {
    const classes = useStyles();
    const [click, setClick] = useState(false)
    const [dropdown, setDropDown] = useState(false)
    const [datadropdown, setDataDropDown] = useState(false)
    const handleClick = () => setClick(!click)


    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
            setDataDropDown(false);
        } else {
            setDropDown(true)
            setDataDropDown(true)
        };
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropDown(true);
            setDataDropDown(true);
        } else {
            setDropDown(false)
            setDataDropDown(false)
        };
    };

    return (
        <div className="header-section">
            <nav className="navigation-bar">
                <div className={classes.Logo}>
                    <Link to="/Blogs"> <img src={NewLogo} className={classes.LogoImage} alt="" /></Link>

                </div>
                <div className="navigation-menu">
                        <div className="navigation-icon">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                        <div className="navigation-bar-menu">
                    <ul>
                    <li><Link to="/" className={classes.NaveItems} href="#">Home </Link></li>
                    <li><Link to="/AboutUs" className={classes.NaveItems} href="#">About Us </Link></li>
                    <li><Link to="/OurServices" className={classes.NaveItems} href="#">Our Services</Link></li>
                    {/* <li
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to="/OurServices"
                            className={classes.NaveItems}
                            href="#"
                        // onClick={closeMobileMenu}
                        >
                            Our Services
                         </Link>
                        {dropdown && <DropDown />}
                    </li> */}
                    {/* <li><Link to="/OurData" className={classes.NaveItems} href="#"> Our Data </Link></li> */}
                    <li className="dropdown-block"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link 
                            className={classes.NaveItems}
                            href="#"
                        // onClick={closeMobileMenu}
                        >
                            Industries 
                         </Link>
                        {datadropdown && <DataDropDown />}
                    </li>
                    <li><Link to="/HowItsWorks" className={classes.NaveItems} href="#"> How It Works </Link></li>
                    {/* <li><Link to="/Testimonials" className={classes.NaveItems} href="#"> Testimonials </Link></li> */}
                    <li><Link to="/ContactUs" className={classes.NaveItems} href="#">Contact Us  </Link></li>
                    </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}
