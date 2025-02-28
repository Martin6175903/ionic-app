import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

const Menu = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={'ion-padding'}>
        Menu Page
      </IonContent>
    </IonPage>
  );
};

export default Menu;