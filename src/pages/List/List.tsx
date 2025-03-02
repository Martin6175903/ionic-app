import {
  IonAvatar,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonChip,
  IonContent, IonFab, IonFabButton,
  IonHeader, IonIcon, IonImg, IonItem, IonLabel,
  IonMenuButton, IonModal,
  IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonSkeletonText, IonText,
  IonTitle,
  IonToolbar, useIonAlert, useIonToast,
  useIonViewWillEnter
} from "@ionic/react";
import {useRef, useState} from "react";
import {addOutline, trashBinOutline} from "ionicons/icons";

const List = () => {

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<any[]>([])
  const [showAlert] = useIonAlert();
  const [showToast] = useIonToast();
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const modal = useRef<HTMLIonModalElement>(null);
  const cardModal = useRef<HTMLIonModalElement>(null);
  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null)

  useIonViewWillEnter(async () => {
    const users = await getUsers()
    setUsers(users);
    setLoading(false);
  })

  const getUsers = async () => {
    const data = await fetch('https://randomuser.me/api?results=10');
    const users = await data.json();
    return users.results;
  }

  const clearList = () => {
    showAlert({
      header: 'Confirm!',
      message: 'Are you sure you want to delete all users?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          handler() {
            setUsers([])
            showToast({
              message: 'All users deleted',
              duration: 2000,
              color: 'danger'
            })
          }
        }
      ]
    })
  }

  const doRefresh = async (event:  any) => {
    const data = await getUsers();
    setUsers(data);
    event.detail.complete();
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

        <IonRefresher slot={'fixed'} onIonRefresh={(ev) => doRefresh(ev)}>
          <IonRefresherContent/>
        </IonRefresher>

        {loading
          ? (
            [...Array(10).map((_, index) => (
              <IonCard key={index}>
                <IonCardContent className={'ion-no-padding'}>
                  <IonItem>
                    <IonAvatar slot={'start'}>
                      <IonSkeletonText/>
                    </IonAvatar>
                    <IonLabel>
                      <IonSkeletonText animated style={{ width: '150px' }}/>
                      <p>
                        <IonSkeletonText/>
                      </p>
                    </IonLabel>
                    <IonChip slot={'end'} color={'primary'}>

                    </IonChip>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            ))]
          )
          : (
          users.map((user,index) => (
            <IonCard key={index} onClick={() => setSelectedUser(user)}>
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

        <IonModal breakpoints={[0, 0.5, 0.8]} initialBreakpoint={0.5} ref={modal} isOpen={selectedUser !== null} onIonModalDidDismiss={() => setSelectedUser(null)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot={'start'}>
                <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
              </IonButtons>
              <IonTitle>{selectedUser?.name.first} {selectedUser?.name.last}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            Anything Data
          </IonContent>
        </IonModal>

        <IonModal ref={cardModal} trigger={'card-modal'}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot={'start'}>
                <IonButton onClick={() => cardModal.current?.dismiss()}>Close</IonButton>
              </IonButtons>
              <IonTitle>Card Modal</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <p>My card Modal</p>
          </IonContent>
        </IonModal>

        <IonFab vertical={'bottom'} horizontal={'end'} slot={'fixed'}>
          <IonFabButton id={'card-modal'}>
            <IonIcon icon={addOutline}/>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default List;