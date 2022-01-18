import React from 'react';
import type {FC} from "react"
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import SideNav from './components/Sidenav';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { classicNameResolver } from 'typescript';


const App: React.FC = () => {

  const [wid, setWid] = useState<string>("0%");
  const [animation, setAnimation] = useState<string>("slide-nav-closed-left");

  
  interface INavFunction {
    closeSideNav: void;
  }
  const openSideNav: any = () => {
    setWid("25%")
 }

  const closeSideNav: any = () => {
    setWid("0%")
    // setAnimation("")
 }

 
  return (
    <div className="App">
    <Container fluid className="total-cover justify-content-center">
      <BrowserRouter>
      <Row className="justify-content-left">
        <Col sm={2} className="col-3 sideNavButton text-align-left" onClick={e => openSideNav()}>      
      <i className="bi bi-list" ></i>
        </Col>
        <Col sm={10} className="col-10">
        </Col>

      </Row>
      <SideNav closeSideNav={closeSideNav} animation={animation} wid={wid}/>


      <Routes>
       <Route path="/" element={<Home/>}/> 
      </Routes>
      </BrowserRouter>
    </Container>
    </div>
  );
}

export default App;
