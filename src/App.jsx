import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Container from './components/container/Container.jsx';
import Wrapper from './components/wrapper/Wrapper.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import logo from './logo.svg';
// add svg logo into app rendering via div className and accompanying css
// view CRAp default settings to reverse engineer incorporation 



const App = () => {
    return (
        <div>
            <Navbar />
            <Wrapper>
                <Container>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route component={PageNotFound} /> 
                    </Switch>
                    <ToastContainer autoClose={3000} hideProgressBar />
                </Container>
            </Wrapper>
            <Footer />
        </div>
    )
}

export default App;