import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const Leftbar = () => {
    return (
        <>
        <section className="leftbar">
            <section className="leftwrap">
                <section className="menu">
                <h3 className="sidetitle">Menu</h3>
                <ul className="menulist">
                    <li className="listitems">
                        <HomeIcon className="sideicons"/>
                        Home
                    </li>
                    <li className="listitems">
                        <TrendingUpIcon className="sideicons"/>
                        Mas vendidos
                    </li>
                    <li className="listitems">
                        <TimelineIcon className="sideicons"/>
                        Almacén
                    </li>
                </ul>
                </section>                
            </section>
        </section>
        </>
    )
};