import React from 'react'
import { NavLink } from 'react-router-dom'


export const Sidebar = () => {
    return (
        <div className="sidebar" data-active-color="danger">
  
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li>
                        <NavLink activeClassName="active" className="simple-text logo-normal" to="/main" >
                           About
                        </NavLink>

                    </li>
                
                    <li>
                        <NavLink activeClassName="active" className="simple-text logo-normal" to="/CountryIndex">
                            Simple CRUD
                        </NavLink>

                    </li>
                    <li>
                        <NavLink activeClassName="active" className="simple-text logo-normal" to="/formdata">

                            Third One
                        </NavLink>

                    </li>

                </ul>
            </div>
        </div>
    )
}
