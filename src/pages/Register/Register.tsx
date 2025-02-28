import {
  IonBackButton,
  IonButton, IonButtons,
  IonCard,
  IonCardContent, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon,
  IonInput,
  IonPage, IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { checkmarkDoneOutline } from "ionicons/icons";
import {FormEvent} from "react";

const Register = () => {

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Create Account')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonGrid>
            <IonRow className={'ion-align-items-center'}>
              <IonCol>
                <IonButtons>
                  <IonBackButton color={'light'} defaultHref={'/'}/>
                </IonButtons>
              </IonCol>
              <IonCol className={'ion-justify-content-between ion-text-end'}>
                <IonTitle color={'light'}>Create Account</IonTitle>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>

        <IonGrid fixed>
          <IonRow className={"ion-justify-content-center"}>
            <IonCol size="12" sizeMd={"8"} sizeLg={"6"} sizeXl={"4"}>
              <IonCard>
                <IonCardContent>
                  <form onSubmit={handleRegister}>
                    <IonInput fill={"outline"} labelPlacement={"floating"} label={"email"} type={"email"} placeholder={"martin5324@yandex.by"}/>
                    <IonInput className={"ion-margin-top"} fill={"outline"} labelPlacement={"floating"} label={"Password"} type={"password"} placeholder={"Skiter2331"}/>
                    <IonButton routerLink={'/register'} color={'secondary'} type={'button'} expand={'block'} className={'ion-margin-top'}>
                      Create account
                      <IonIcon icon={checkmarkDoneOutline} slot={'end'}/>
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;