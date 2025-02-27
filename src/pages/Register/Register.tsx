import {
  IonBackButton,
  IonButton, IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader, IonIcon,
  IonInput,
  IonPage,
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
          <IonButtons className={'ion-float-start'}>
            <IonBackButton color={'light'} defaultHref={'/'}/>
          </IonButtons>
          <IonTitle color={'primary'}>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
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
      </IonContent>
    </IonPage>
  );
};

export default Register;