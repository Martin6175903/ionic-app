import {IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar} from "@ionic/react";

const Login = () => {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(true)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonTitle color={'primary'}>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <form onSubmit={handleSubmit}>
              <IonInput fill={"outline"} labelPlacement={"floating"} label={"email"} type={"email"} placeholder={"martin5324@yandex.by"}/>
              <IonInput className={"ion-margin-top"} fill={"outline"} labelPlacement={"floating"} label={"Password"} type={"password"} placeholder={"Skiter2331"}/>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;