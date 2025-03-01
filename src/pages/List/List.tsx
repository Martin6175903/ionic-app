import {
  IonAvatar,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip,
  IonContent,
  IonHeader, IonIcon, IonImg, IonItem, IonLabel,
  IonMenuButton,
  IonPage, IonSearchbar,
  IonTitle,
  IonToolbar, useIonAlert,
  useIonViewWillEnter
} from "@ionic/react";
import {useState} from "react";
import {trashBinOutline} from "ionicons/icons";

const List = () => {

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<any[]>([])
  const [showAlert] = useIonAlert();

  useIonViewWillEnter(async () => {
    const users = await getUsers()
    setUsers(users);
    console.log(users)
    setLoading(false);
  })

  const getUsers = async () => {
    const data = await fetch('https://randomuser.me/api?results=10');
    const users = await data.json();
    return users.results;
  }

  const clearList = () => {

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'secondary'}>
          <IonButtons slot={'start'}>
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>List</IonTitle>
          <IonButtons slot={'end'}>
            <IonButton onClick={clearList}>
              <IonIcon slot={'icon-only'} icon={trashBinOutline}/>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar color={'secondary'}>
          <IonSearchbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? <h1>Loading...</h1> : (
          users.map((user,index) => (
            <IonCard key={index}>
              {/*<IonCardHeader>*/}
              {/*  <IonCardTitle>Test</IonCardTitle>*/}
              {/*</IonCardHeader>*/}
              <IonCardContent className={'ion-no-padding'}>
                <IonItem>
                  <IonAvatar slot={'start'}>
                    <IonImg src={user.picture.thumbnail}/>
                  </IonAvatar>
                  <IonLabel>
                    {user.name.first} {user.name.last}
                    <p>{user.email}</p>
                  </IonLabel>
                  <IonChip slot={'end'} color={'primary'}>
                    {user.nat}
                  </IonChip>
                </IonItem>
              </IonCardContent>
            </IonCard>
          )
        ))}
      </IonContent>
    </IonPage>
  );
};

export default List;