import React from "react"

import Stories from "./components/Stories"
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div class="root">
            <Navbar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </div>
            <div class="fundo-mobile">
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