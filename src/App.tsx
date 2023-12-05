import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import MyApp from "./page/MyApp";
import Home from "./page/Home";
import AboutPage from "./page/AboutPage";
import Profile from "./page/Profile";
import NotFound from "./page/NotFound";
import ShoppingList from "./page/ShoppingList";
import Counter from "./page/Counter";
import CounterTogether from "./page/CounterTogether";
import TicTacToe from "./page/TicTacToe";

const menus = [
    {to: "MyApp", label: "MyApp", page: MyApp},
    {to: "AboutPage", label: "AboutPage", page: AboutPage},
    {to: "Profile", label: "Profile", page: Profile},
    {to: "ShoppingList", label: "ShoppingList", page: ShoppingList},
    {to: "Counter", label: "Counter", page: Counter},
    {to: "CounterTogether", label: "CounterTogether", page: CounterTogether},
    {to: "TicTacToe", label: "TicTacToe", page: TicTacToe},
];

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home menus={menus}/>}/>
                {menus.map((menu, index) => (
                    <Route key={index} path={menu.to} element={<menu.page/>}/>
                ))}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
