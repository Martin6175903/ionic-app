import {ReactNode} from "react";
import {useSwiper} from "swiper/react";
import {IonButton} from "@ionic/react";
import styles from "../Intro.css";

const SwiperButtonPrev = ({children}: {children: ReactNode}) => {
  const swiper = useSwiper();
  return <IonButton color={'secondary'} className={'button-prev'} onClick={() => swiper.slidePrev()}>{children}</IonButton>;
};

export default SwiperButtonPrev;