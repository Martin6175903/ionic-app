import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useState} from "react";

const List = () => {

  const [users, setUsers] = useState<any[]>([])

  const getUsers = async () => {
    const data = await fetch('https://randomuser.me/api?results=10');
    const users = await data.json();
    setUsers(users)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot={'start'}>
            <IonMenuButton/>
          </IonButtons>
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