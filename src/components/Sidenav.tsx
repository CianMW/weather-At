import { Container } from "react-bootstrap";


interface desProp {
    wid: string;
    closeSideNav: any;
    animation: string;
}


const SideNav = ({wid, closeSideNav, animation}: desProp) => {
    return (
    <div className="sidenav" style={{width: wid}} >
        <div  className="sideNavButton" onClick={closeSideNav} >

        <i className="bi bi-list" ></i>
        </div>
        {/* <button onClick={closeSideNav}>X</button> */}
       <a href="#section">Home</a>
    </div>
     )
    };
export default SideNav;