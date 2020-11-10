import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { MenuItems} from './MenuItems'

export default function DropDown() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
        <ul onClick={handleClick} style={{display:"inherit", zIndex:"+1"}}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item,index) =>{
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path}
                        onClick= { () => setClick(false)}
                       >
                           {item.title}
                        </Link>   
                    </li>
                )
            })

            }
        </ul>
        </>
    )
}
