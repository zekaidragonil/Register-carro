import { Redirect, Route, Switch, useLocation,  } from 'react-router-dom';
import { IonApp,  IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Registro from './pages/Registro'; 
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import PrivateRoute from './pages/PrivateRoute';
import Assginacion from './pages/Asignacion';
import { UserProvider } from './context/UserContext';
import ShowSolictud from './pages/ShowSolicitud';
import Solicitudes from './pages/Solicitudes';
import ShowReport from './pages/ShowReporte';
import Users from './pages/Usuarios';
import ShowUser from './pages/ShowUser';
import Carros from './pages/ListCarro';
import DashUser from './pages/DashUser';
import Inspecciones from './pages/Inspeccion';
import Registroinspe from './pages/RegistroInspe';
import ShowInpeccion from './pages/ShowInpes';
import Menulateral from './components/Menulougut';
import Infouser from './pages/Infouser';
import React, { useState } from 'react';
import VistaCarro from './pages/VistaCarro';

setupIonicReact();


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const token = localStorage.getItem("token");

  const isLoggedIn = token ? true : false;



  return (
    <IonApp>
      <IonReactRouter>
          <IonSplitPane contentId="main">
          {isLoggedIn && <Menulateral isOpen={isMenuOpen} toggleMenu={toggleMenu} />}
            <IonRouterOutlet id="main">
             <UserProvider>
              <Switch>
                <PrivateRoute exact path="/home" component={Dashboard} roles={['admin']} />
                <PrivateRoute exact path="/asignacion" component={Assginacion} roles={['admin']} />
                <PrivateRoute path="/Registro" component={Registro} exact  roles={['admin']} />
                <PrivateRoute path="/Solicitudes" component={ShowSolictud} exact roles={['admin']} />
                <PrivateRoute path="/reporte" component={Solicitudes} exact roles={['user']} />
                <PrivateRoute path="/showreport/:id/:placa/:name" component={ShowReport} roles={['admin']} />
                <PrivateRoute path="/usuario" component={Users}  roles={['admin']} />
                <PrivateRoute path="/showuser/:id" component={ShowUser}  roles={['admin']} />
                <PrivateRoute path="/Carros" component={Carros} roles={['admin']} />
                <PrivateRoute path="/home-user" component={DashUser}  roles={['user']} />
                <PrivateRoute path="/inspeccion" component={Inspecciones}  roles={['admin']}/>
                <PrivateRoute path="/inspecciones/:id" component={ShowInpeccion} roles={['admin']} />
                <PrivateRoute path="/registroinsp" component={Registroinspe} roles={['admin']} />
                <PrivateRoute path="/showCarro/:id" component={VistaCarro} roles={['admin']} />
                <PrivateRoute path="/infouser" component={Infouser} roles={['user']} />
                <Route path="/login" component={Login} exact />
                <Redirect to="login" />
              </Switch>
              </UserProvider>
            </IonRouterOutlet>
          </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;