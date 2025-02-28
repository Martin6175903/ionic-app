import {useSwiper} from "swiper/react";
import {IonButton} from "@ionic/react";
import {ReactNode} from "react";
import "../Intro.css";

const SwiperButtonNext = ({children}: {children: ReactNode}) => {
  const swiper = useSwiper();
  return <IonButton color={'secondary'} className={'button-next'} onClick={() => swiper.slideNext()}>{children}</IonButton>;
};

export default SwiperButtonNext;