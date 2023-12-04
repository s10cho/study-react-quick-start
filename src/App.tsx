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
    {to: "MyApp", label: "MyApp"},
    {to: "AboutPage", label: "AboutPage"},
    {to: "Profile", label: "Profile"},
    {to: "ShoppingList", label: "ShoppingList"},
    {to: "Counter", label: "Counter"},
    {to: "CounterTogether", label: "CounterTogether"},
    {to: "TicTacToe", label: "TicTacToe"},
];

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home menus={menus}/>}/>
                <Route path="/MyApp" element={<MyApp/>}></Route>
                <Route path="/AboutPage" element={<AboutPage/>}></Route>
                <Route path="/Profile" element={<Profile/>}></Route>
                <Route path="/ShoppingList" element={<ShoppingList/>}></Route>
                <Route path="/Counter" element={<Counter/>}></Route>
                <Route path="/CounterTogether" element={<CounterTogether/>}></Route>
                <Route path="/TicTacToe" element={<TicTacToe/>}></Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
