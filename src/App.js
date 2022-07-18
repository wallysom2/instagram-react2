import React from "react"

import Stories from "./components/Stories"
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="root">
            <Navbar />
            <div className="corpo">
                <div className="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </div>
            <div className="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}

export default App;