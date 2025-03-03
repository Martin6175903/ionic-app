import {
  IonButton,
  IonCard,
  IonCardContent, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon,
  IonInput,
  IonPage, IonRow,
  IonTitle,
  IonToolbar, useIonLoading, useIonRouter
} from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import LogoXBox from "../../assets/logo-xbox-svgrepo-com.svg";
import {FormEvent, useEffect, useState} from "react";
import Intro from "../../components/Intro/Intro";
import {Preferences} from "@capacitor/preferences";

const INTRO_KEY = 'intro-seen';

const Login = () => {

  const router = useIonRouter();
  const [present, dismiss] = useIonLoading()
  const [introSeen, setIntroSeen] = useState(false);

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY })
      console.log(seen)
      setIntroSeen(seen.value === 'true');
    }
    checkStorage()
  }, []);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await present('Logging in...');
    setTimeout(async () => {
      await dismiss();
      router.push('/app', 'root');
    }, 2000)
  }

  const finishIntro = async () => {
    setIntroSeen(true);
    await Preferences.set({key: INTRO_KEY, value: 'true'})
  }

  const introAgain = async () => {
    setIntroSeen(false);
    await Preferences.remove({key: INTRO_KEY})
  }

  return (
    <>
      {!introSeen ? <Intro onFinish={finishIntro}/> : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={'success'}>
              <IonTitle className={'ion-text-center'} color={'light'}>Login</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent scrollY={false} className={'ion-padding'}>
            <IonGrid fixed>
              <IonRow className={"ion-justify-content-center"}>
                <IonCol size="12" sizeMd={"8"} sizeLg={"6"} sizeXl={"4"}>
                  <div className="ion-text-center ion-margin-top">
                    <img src={LogoXBox} alt="Logo FCC" width={150}/>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow className={"ion-justify-content-center"}>
                <IonCol size="12" sizeMd={"8"} sizeLg={"6"} sizeXl={"4"}>
                  <IonCard>
                    <IonCardContent>
                      <form onSubmit={handleLogin}>
                        <IonInput mode={'md'} fill={"outline"} labelPlacement={"floating"} label={"email"} type={"email"} placeholder={"martin5324@yandex.by"}/>
                        <IonInput mode={'md'} className={"ion-margin-top"} fill={"outline"} labelPlacement={"floating"} label={"Password"} type={"password"} placeholder={"Skiter2331"}/>
                        <IonButton className={'ion-margin-top'} type={'submit'} expand={'block'}>
                          Login
                          <IonIcon icon={logInOutline} slot={'end'}/>
                        </IonButton>
                        <IonButton routerLink={'/register'} color={'secondary'} type={'button'} expand={'block'} className={'ion-margin-top'}>
                          Create account
                          <IonIcon icon={personCircleOutline} slot={'end'}/>
                        </IonButton>
                        <IonButton onClick={introAgain} fill={'clear'} size={'small'} type={'button'} expand={'block'} className={'ion-margin-top'}>
                          Watch intro again
                          <IonIcon icon={personCircleOutline} slot={'end'}/>
                        </IonButton>
                      </form>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;