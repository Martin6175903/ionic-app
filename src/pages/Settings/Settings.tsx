import {
  IonButtons,
  IonContent,
  IonHeader, IonIcon, IonLabel,
  IonMenuButton,
  IonPage, IonRouterOutlet,
  IonTabBar, IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {Route} from "react-router-dom";
import Tab1 from "@/pages/Tabs/Tab1";
import Tab2 from "@/pages/Tabs/Tab2";
import {Redirect} from "react-router";
import {ellipse, triangle} from "ionicons/icons";

const Settings = () => {
  return (
    <IonTabs>
      <IonTabBar slot={'bottom'}>
        <IonTabButton tab={'tab1'} href={'/app/settings/tab1'}>
          <IonIcon icon={triangle}/>
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab={'tab2'} href={'/app/settings/tab2'}>
          <IonIcon icon={ellipse}/>
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
      </IonTabBar>

      <IonRouterOutlet>
        <Route path={"/app/settings/tab1"} component={Tab1}/>
        <Route path={"/app/settings/tab2"} component={Tab2}/>
        <Route exact path={"/app/settings"}>
          <Redirect to={"/app/settings/tab1"}/>
        </Route>
      </IonRouterOutlet>
    </IonTabs>
  );
};

export default Settings;