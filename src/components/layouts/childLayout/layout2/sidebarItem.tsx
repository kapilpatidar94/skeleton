import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import style from './style.module.scss';

/**
 * @author
 * @function SidebarItem
 **/

const SidebarItem = (props:any) => {
  const { name, subMenus, iconClassName, onClick, to, exact } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={props.onClick} className="list-unstyled">
      <Link
        to={to}
        // onClick={() => {
        //   setExpand((e) => !e);
        // }}
        className={style.menuItem}
      >
        <div className={style.menuIcon}>
          <i className={iconClassName}></i>
        </div>
        <span>{name}</span>
      </Link>
      {subMenus && subMenus.length > 0 ? (
        <ul className={style.subMenu}>
          {subMenus.map((menu:any, index:any) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default SidebarItem;
