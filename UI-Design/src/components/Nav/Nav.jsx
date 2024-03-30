import React, { useState } from 'react';
import './Nav.css';
import NavBar from '../../assets/navbar.jpg';

import { ImHome } from 'react-icons/im';
import { RiChatSmile2Fill } from "react-icons/ri";
import { PiGameControllerFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Nav() {
    const [isHovered, setHovered] = useState(false);

    const navigator = useNavigate()

    const mouseEnterHandler = () => {
        setHovered(true);
    };

    const mouseLeaveHandler = () => {
        setHovered(false);
    };

    return (
        <div className="nav-box">
            <div className="nav-ring">
                <img
                    src={NavBar}
                    alt=""
                    className="nav-icon"
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onClick={() => navigator("/")}
                />
                <div
                    className={`nav-item ${isHovered ? 'hovered-nav-item-1' : ''}`}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onClick={() => navigator("/")}
                >
                    <ImHome size={35} color='white' className='nav-item-icon' />
                </div>
                <div
                    className={`nav-item ${isHovered ? 'hovered-nav-item-2' : ''}`}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onClick={() => navigator("/social")}
                >
                    <RiChatSmile2Fill size={35} color='white' className='nav-item-icon' />
                </div>
                <div
                    className={`nav-item ${isHovered ? 'hovered-nav-item-3' : ''}`}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onClick={() => navigator("/games")}
                >
                    <PiGameControllerFill size={35} color='white' className='nav-item-icon' />
                </div>
                <div
                    className={`nav-item ${isHovered ? 'hovered-nav-item-4' : ''}`}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    <FaCode size={35} color='white' className='nav-item-icon' />
                </div>
            </div>
        </div>
    );
}

export default Nav;
