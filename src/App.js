import './App.css';
import {Route, Routes} from "react-router-dom";
import Posts from "./components/posts/Posts";
import AboutMe from "./components/aboutMe/AboutMe";
import UserDetails from "./components/userDetails/UserDetails";
import HeaderNavbar from "./components/navbar/Navbar";

function App() {
    return (
        <div className="App">
            <HeaderNavbar />
            <Routes>
                <Route path={'/'} element={<Posts/>}/>
                <Route path={'/about'} element={<AboutMe/>}/>
                <Route path={'/details'} element={<UserDetails/>}/>
            </Routes>
        </div>);
}

export default App;