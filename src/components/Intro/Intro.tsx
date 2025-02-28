import {FC} from "react";
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import {IonButton, IonButtons, IonContent, IonPage, IonText} from "@ionic/react";
import IntroIllustration1 from "@assets/intro/presentation-svgrepo-com.svg";
import IntroIllustration2 from "@assets/intro/presentation-svgrepo-com (1).svg";
import IntroIllustration3 from "@assets/intro/presentation-svgrepo-com (2).svg";
import "./Intro.css";
import SwiperButtonNext from "@/components/Intro/Swiper/SwiperButtonNext";
import SwiperButtonPrev from "@/components/Intro/Swiper/SwiperButtonPrev";
import SwiperButtonsContainer from "@/components/Intro/Swiper/SwiperButtonsContainer";

interface ContainerProps {
  onFinish: () => void
}

const Intro: FC<ContainerProps> = ({onFinish}) => {

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
              <SwiperButtonsContainer>
                <SwiperButtonNext>Next</SwiperButtonNext>
              </SwiperButtonsContainer>
            </IonButtons>
          </SwiperSlide>
          <SwiperSlide>
            <img src={IntroIllustration2} alt="Intro Image"/>
            <IonText>
              <h3>Advantage 2 our Application</h3>
            </IonText>
            <IonButtons>
              <SwiperButtonsContainer>
                <SwiperButtonPrev>Prev</SwiperButtonPrev>
                <SwiperButtonNext>Next</SwiperButtonNext>
              </SwiperButtonsContainer>
            </IonButtons>
          </SwiperSlide>
          <SwiperSlide>
            <img src={IntroIllustration3} alt="Intro Image"/>
            <IonText>
              <h3>Advantage 3 our Application</h3>
            </IonText>
            <IonButtons>
              <SwiperButtonsContainer>
                <SwiperButtonPrev>Prev</SwiperButtonPrev>
                <IonButton style={{border: "2px solid #6030ff"}} className={'button-finish'} color={'tertiary'} onClick={onFinish}>Finish Intro</IonButton>
              </SwiperButtonsContainer>
            </IonButtons>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Intro;