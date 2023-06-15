import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const Top = () => {
    return (
        <>
            <section className="top">
                <section className="topwrap">
                    <article className="topleft">
                        <img className="logo" src="./src/assets/img/argift.png" alt="" />
                    </article>
                    <article className="topcenter">
                        <span>PANEL ADMINISTRATIVO</span>
                    </article>
                    <article className="topright">
                        <div className="iconos">
                            <NotificationsNoneIcon />
                            <span className="dataicon">2</span>
                        </div>
                        <div className="iconos">
                            <SettingsIcon />
                        </div>
                        <div className="iconos">
                            <LogoutIcon />                            
                        </div>
                        <img className="perfil" src="./src/assets/img/Jose.png" alt="" />
                    </article>
                </section>
            </section>
        </>
    )

};