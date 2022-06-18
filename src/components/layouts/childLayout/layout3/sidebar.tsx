import React, { useState, useEffect } from 'react';
import style from "./style.module.scss";
import logoLight from '../../../../assets/images/skeleton/3461881-84.png';
import logoDark from '../../../../assets/images/skeleton/3461846-84.png';
import { layout3 } from '../../../../configs/sideMenu';
import { NavLink } from 'react-router-dom';


export default function Sidebar() {

    const [_control, _setControl] = useState({ sidebarToggle: true, mode: false });

    const changeControl = (name: string, value: string | number | boolean | null) => {
        _setControl({ ..._control, [name]: value });
    }

    useEffect(() => {

    }, []);




    return (<div className={`${_control.mode && style.dark}`}>
        <nav className={`${style.sidebar} ${_control.sidebarToggle && style.close}`}>
            <header className={style.header}>
                <div className={style.imageText}>
                    <span className={style.image}>
                        <img src={_control.mode ? logoDark : logoLight} style={{ filter: _control.mode ? 'brightness(10) invert(1)' : 'brightness(10) invert(0.3)' }} alt="" />
                    </span>

                    <div className={`${style.text} ${style.logoText} ms-3`}>
                        <span className={style.name}>Skeleton</span>
                        <span className={style.profession}>Web developer</span>
                    </div>
                </div>

                <i className={`bx bx-chevron-right ${style.toggle}`} onClick={() => changeControl('sidebarToggle', !_control.sidebarToggle)} ></i>
            </header>

            <div className={style.menuBar}>
                <div className={style.menu}>

                    <li className={`${style.searchBox} ${style.li} ${_control.sidebarToggle && style.close}`} onClick={() => changeControl('sidebarToggle', false)}>
                        <i className={`bx bx-search ${style.icon}`}></i>
                        <input type="text" placeholder="Search..." />
                    </li>

                    <ul className={style.menuLinks}>
                        {layout3.map((item: any, index: number) => <li key={index} className={`nav-link ${style.li}`}>
                            <NavLink to={item.to}>
                                <i className={`${style.icon} ${item.iconClassName}`}></i>
                                <span className={style.text}>{item.name}</span>
                            </NavLink>
                        </li>)}
                    </ul>
                </div>

                <div className={style.bottomContent}>
                    <li className={style.li}>
                        <a href="#">
                            <i className={`bx bx-log-out ${style.icon}`}></i>
                            <span className={style.text}>Logout</span>
                        </a>
                    </li>

                    <li className={`${style.mode} ${style.li}`}>
                        <div className={style.sunMoon}>
                            <i className={`bx bx-moon ${style.icon} ${style.moon}`}></i>
                            <i className={`bx bx-sun ${style.icon} ${style.sun}`}></i>
                        </div>
                        <span className={`mode-text ${style.text}`}>{!_control.mode ? 'Dark Mode' : 'Light Mode'}</span>

                        <div className={style.toggleSwitch} onClick={() => changeControl('mode', !_control.mode)}>
                            <span className={style.switch}></span>
                        </div>
                    </li>

                </div>
            </div>

        </nav>

        <section className={style.home}>
            <div className={style.text}>Dashboard Sidebar</div>
        </section>
    </div>);
}
