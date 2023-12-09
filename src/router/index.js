import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Home } from "../pages/home/home";
import { Pokedex } from "../pages/pokedex/pokedex";
import { Profile } from "../pages/profile/profile"



export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/"  element={<Home />}/>
                <Route path="/pokedex" element={<Pokedex/>}/>
                <Route path="/profile" element={<Profile/>}/>

            </Routes>
        
        </BrowserRouter>
    )
}