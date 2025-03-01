import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";

const Tab2 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot={'start'}>
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={'ion-padding'}>
        UI goes here...
      </IonContent>
    </IonPage>
  );
};

export default Tab2;