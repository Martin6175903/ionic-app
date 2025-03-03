import {
  IonButton,
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet, IonSplitPane,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {Route} from "react-router-dom";
import List from "@/pages/List/List";
import Settings from "@/pages/Settings/Settings";
import {Redirect} from "react-router";
import {homeOutline, logOutOutline, newspaperOutline} from "ionicons/icons";
import '../List/List.css';

const Menu = () => {

  const paths = [
    {name: 'Home', url: '/app/list', icon: homeOutline},
    {name: 'Settings', url: '/app/settings', icon: newspaperOutline}
  ]

  return (
    <IonPage>
      <IonSplitPane contentId={"main"}>
        <IonMenu contentId={'main'}>
          <IonHeader>
            <IonToolbar color={'secondary'}>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle autoHide={false} key={index}>
                <IonItem detail={true} routerDirection={'none'} routerLink={item.url}>
                  <IonIcon slot={'start'} icon={item.icon}/>
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
            <IonMenuToggle autoHide={false}>
              <IonButton expand={'full'} routerDirection={'root'} routerLink={'/'}>
                <IonIcon slot={'start'} icon={logOutOutline}/>
                Logout
              </IonButton>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id={'main'}>
          <Route exact path={"/app/list"} component={List}/>
          <Route path={"/app/settings"} component={Settings}/>
          <Route exact path={"/app"}>
            <Redirect to={"/app/list"}/>
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;