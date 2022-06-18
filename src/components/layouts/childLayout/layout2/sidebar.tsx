import React, { useEffect, useState } from "react";
import logo from "../../../../assets/images/skeleton.png";
import user from "../../../../assets/images/userProfile.png";
import style from "./style.module.scss";

import SidebarItem from "./sidebarItem";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Content",
    exact: true,
    to: `/content`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  { name: "Design", to: `/design`, iconClassName: "bi bi-vector-pen" },
  {
    name: "Content 2",
    exact: true,
    to: `/content-2`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content-2/courses" },
      { name: "Videos", to: "/content-2/videos" },
    ],
  },
  { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];

const Sidebar = (props:any) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(style.subMenu).forEach((el) => {
      el.classList.remove(style.active);
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(style.menuItem);
    console.log(style.menuItem)
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove(style.active));
        el.classList.toggle(style.active);
        console.log(next);
        if (next !== null) {
          next.classList.toggle(style.active);
        }
      });
    });
  }, []);

  return (
    <div className={`${style.sideMenu} ${inactive ? style.inactive : ""}`}>
      <div className={style.topSection}>
        {/* <div className="logo">
          <img src={logo} alt="webscript" />
        </div> */}
        <div onClick={() => setInactive(!inactive)} className={style.toggleMenuBtn}>
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className={style.searchController}>
        <button className="search-btn">
          <i className="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className={style.divider}></div>

      <div className={style.mainMenu}>
        <ul>
          {menuItems.map((menuItem, index) => (
            <SidebarItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e:any) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

          {/* <li>
            <a className="menuItem">
              <div className="menuIcon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menuItem">
              <div className="menuIcon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>

      <div className={style.sideMenuFooter}>
        <div className={style.avatar}>
          <img src={user} alt="user" />
        </div>
        <div className={style.userInfo}>
          <h5>User 101</h5>
          <p>user101@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
