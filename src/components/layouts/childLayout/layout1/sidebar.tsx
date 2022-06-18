import SidebarItem from "./sidebarItem";
import items from "./data/sidebar.json";
import style from './style.module.scss';

export default function Sidebar(){
    return (
        <div className={style.sidebar}>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}