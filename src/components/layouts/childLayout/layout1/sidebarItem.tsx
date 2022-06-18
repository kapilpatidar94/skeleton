import clsx from "clsx";
import { useState } from "react"
import style from './style.module.scss';

export default function SidebarItem({item}:any){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <div className={open ? clsx(style.sidebarItem, style.open, 'text-white') : clsx(style.sidebarItem, 'text-white')}>
                <div className={style.sidebarTitle} onClick={() => setOpen(!open)}>
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
                    <i className={clsx('bi-chevron-down', 'toggle-btn')} ></i>
                </div>
                <div className={style.sidebarContent}>
                    { item.childrens.map((child:any, index:any) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className={clsx(style.sidebarItem, style.plain, 'text-white')}>
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </a>
        )
    }
}