import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader, IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar, useIonRouter
} from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import LogoXBox from "../../assets/logo-xbox-svgrepo-com.svg";
import {FormEvent} from "react";

const Login = () => {

  const router = useIonRouter();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login')
    // router.push('/home', 'root');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonTitle color={'primary'}>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <div className="ion-text-center ion-margin-top">
          <img src={LogoXBox} alt="Logo FCC" width={150}/>
        </div>
        <IonCard>
          <IonCardContent>
            <form onSubmit={handleLogin}>
              <IonInput fill={"outline"} labelPlacement={"floating"} label={"email"} type={"email"} placeholder={"martin5324@yandex.by"}/>
              <IonInput className={"ion-margin-top"} fill={"outline"} labelPlacement={"floating"} label={"Password"} type={"password"} placeholder={"Skiter2331"}/>
              <IonButton className={'ion-margin-top'} type={'submit'} expand={'block'}>
                Login
                <IonIcon icon={logInOutline} slot={'end'}/>
              </IonButton>
              <IonButton routerLink={'/register'} color={'secondary'} type={'button'} expand={'block'} className={'ion-margin-top'}>
                Create account
                <IonIcon icon={personCircleOutline} slot={'end'}/>
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;