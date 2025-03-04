import {
  IonButton,
  IonButtons, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage, IonRow, IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {useState} from "react";
import {Camera, CameraResultType} from "@capacitor/camera";
import {settings} from "ionicons/icons";

const Tab1 = () => {

  const [image, setImage] = useState<any>(null);

  const takePicture = async() => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    })

    const img = image.webPath;
    setImage(img);
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot={'start'}>
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>Image Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={'ion-padding'}>
        <IonButton expand={'full'} onClick={takePicture}>Take Picture</IonButton>
        <img src={image} alt={image}/>
        <IonButton expand={'full'} className={'ion-margin-horizontal'}>
          <IonGrid>
            <IonRow className={'ion-justify-content-between'}>
              <IonCol className={'ion-text-start'}>
                <IonText>Настройки</IonText>
              </IonCol>
              <IonCol size={'1'}>
                <IonIcon icon={settings}/>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;