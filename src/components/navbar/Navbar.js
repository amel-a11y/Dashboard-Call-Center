import React,{useState} from 'react';
import "./Navbar.css";
import logo from "../../logo_dash.png";
import { Drawer, Button } from 'antd';
import {Link,NavLink} from 'react-router-dom';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import DispatchingList from "../dispatching lists/DisptachingList";


const Navbar = ({sidebarOpen,openSidebar}) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={()=>openSidebar()}>
            <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <Router forceRefresh={true}>
          
     
            <div className="navbar__left">
                <NavLink activeClassName="current" to="/">Stat Opérateurs</NavLink>
                <NavLink activeClassName="current" exact to="/DispatchingList">Dispatching Fiches</NavLink>
                
          </div>
          <Switch>
     <Route path="/DispatchingList" exact component={DispatchingList}/>
     
     </Switch>
     </Router>
           <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
       
          <img width="30" src={logo} alt="Profil" onClick={showDrawer} />
      
        <Drawer
        title="Informations Perso"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <h1>Administrateur</h1>
        <h2>E-mail : xxxx@xxx.fr</h2>
        <h2>Historique</h2>
        <h2>Déconnexion</h2>
        
      </Drawer>
      </div>
        </nav>
    );
};

export default Navbar;
