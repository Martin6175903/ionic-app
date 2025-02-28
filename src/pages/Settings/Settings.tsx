import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage, IonRouterOutlet,
  IonTabBar, IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {Route} from "react-router-dom";

const Settings = () => {
  return (
    <IonTabs>
      <IonTabBar slot={'bottom'}>
        <IonTabButton tab={'tab1'} href={'app/setting/tab1'}></IonTabButton>
      </IonTabBar>

      <IonRouterOutlet>
        <Route path={"/app/settings/tab1"} component={}/>
      </IonRouterOutlet>
    </IonTabs>
  );
};

export default Settings;