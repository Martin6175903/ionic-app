import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home";
import Menu from "@/pages/Menu/Menu";
import { defineCustomElements } from '@ionic/pwa-elements/loader';

setupIonicReact({
  // mode: 'ios',
  // animated: false
});
defineCustomElements(window);

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route path={"/app"} component={Menu}/>
        <Route exact path="/home" component={Home}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
