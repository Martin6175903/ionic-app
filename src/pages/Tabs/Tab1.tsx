import {IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useState} from "react";
import {Camera, CameraResultType} from "@capacitor/camera";

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
      </IonContent>
    </IonPage>
  );
};

export default Tab1;