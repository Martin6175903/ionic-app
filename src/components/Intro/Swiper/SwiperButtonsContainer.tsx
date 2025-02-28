import {ReactNode} from "react";
import {IonButtons, IonToolbar} from "@ionic/react";

const SwiperButtonsContainer = ({children} : {children: ReactNode}) => {
  return (
    <IonButtons style={{display: "flex", gap: "10px", alignItems: "center"}}>
      {children}
    </IonButtons>
  );
};

export default SwiperButtonsContainer;