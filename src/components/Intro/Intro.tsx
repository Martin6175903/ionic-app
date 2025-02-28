import {FC} from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/css';
import {IonButton, IonButtons, IonContent, IonPage, IonText} from "@ionic/react";
import IntroIllustration1 from "@assets/intro/presentation-svgrepo-com.svg";
import IntroIllustration2 from "@assets/intro/presentation-svgrepo-com (1).svg";
import IntroIllustration3 from "@assets/intro/presentation-svgrepo-com (2).svg";
import "./Intro.css";

interface ContainerProps {
  onFinish: () => void
}

const Intro: FC<ContainerProps> = ({onFinish}) => {

  const swiper = useSwiper();

  return (
    <IonPage>
      <IonContent>
        <Swiper navigation={true}>
          <SwiperSlide>
            <img src={IntroIllustration1} alt="Intro Image"/>
            <IonText>
              <h3>Advantage 1 our Application</h3>
            </IonText>
            <IonButtons>
              <IonButton onClick={() => swiper.slidePrev()}>Prev</IonButton>
              <IonButton onClick={() => swiper.slideNext()}>Next</IonButton>
            </IonButtons>
          </SwiperSlide>
          <SwiperSlide>
            <img src={IntroIllustration2} alt="Intro Image"/>
            <IonText>
              <h3>Advantage 2 our Application</h3>
            </IonText>
            <IonButtons>
              <IonButton onClick={() => swiper.slidePrev()}>Prev</IonButton>
              <IonButton onClick={() => swiper.slideNext()}>Next</IonButton>
            </IonButtons>
          </SwiperSlide>
          <SwiperSlide>
            <img src={IntroIllustration3} alt="Intro Image"/>
            <IonText>
              <h3>Advantage 3 our Application</h3>
            </IonText>
            <IonButton onClick={onFinish}>Finish Intro</IonButton>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Intro;