import './App.css';
import {Route, Routes} from "react-router-dom";
import Posts from "./components/posts/Posts";
import AboutMe from "./components/aboutMe/AboutMe";
import UserDetails from "./components/userDetails/UserDetails";
import HeaderNavbar from "./components/navbar/Navbar";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {requestPostsAction} from "./redux/actions/Actions";
import {Container} from "react-bootstrap";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestPostsAction())
    }, [])

    return (
        <div className="App">
            <Container>
                <HeaderNavbar/>
                <Routes>
                    <Route path={'/'} element={<Posts/>}/>
                    <Route path={'/about'} element={<AboutMe/>}/>
                    <Route path={'/details/:userId'} element={<UserDetails/>}/>
                </Routes>
            </Container>
        </div>);
}

export default App;