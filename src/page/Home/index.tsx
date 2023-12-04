import {Link} from "react-router-dom";
import React from "react";

interface Menu {
    to: string;
    label: string;
}

const Home: React.FC<{ menus: Menu[]; }> = ({menus}) => {
    return (
        <ul>
            {menus.map((link, index) => (
                <li key={index}>
                    <Link to={link.to}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
}

export default Home;
