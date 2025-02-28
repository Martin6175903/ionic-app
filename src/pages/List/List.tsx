import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

const List = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={'ion-padding'}>
        UI goes here...
      </IonContent>
    </IonPage>
  );
};

export default List;