import {
  CreateAnimation, createGesture, Gesture, GestureDetail, IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar, useIonViewDidEnter
} from "@ionic/react";
import {useRef} from "react";

const Tab2 = () => {

  const animationRef = useRef(null);
  const elementRef = useRef<HTMLDivElement | null>(null)

  useIonViewDidEnter(() => {
    animationRef.current?.animation.play();
    const gesture: Gesture = createGesture({
      threshold: 0,
      el: elementRef.current!,
      gestureName: 'my-gesture',
      onMove: ev => onMoveHandler(ev),
      onStart: ev => onMoveStart(ev),
      onEnd: ev => onMoveEnd(ev)
    })
    gesture.enable();
  })

  const onMoveHandler = (detail: GestureDetail) => {
    const x = detail.currentX - detail.startX;
    const y = detail.currentY - detail.startY;

    elementRef.current!.style.transform = `translate(${x}px, ${y}px)`;
  }

  const onMoveStart = (detail: GestureDetail) => {
    elementRef.current!.style.transition = 'none';
  }

  const onMoveEnd = (detail: GestureDetail) => {
    elementRef.current!.style.transition = '500ms ease-out';
    elementRef.current!.style.transform = `translate(0px, 0px)`;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot={'start'}>
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={'ion-padding'}>
        <CreateAnimation
          ref={animationRef}
          duration={2000}
          iterations={Infinity}
          delay={1000}
          keyframes={[
            {offset: 0, transform: 'scale(1)', opacity: '1'},
            {offset: 0.5, transform: 'scale(1.5)', opacity: '0.5'},
            {offset: 1, transform: 'scale(1)', opacity: '1'},
          ]}
        >
          <IonButton expand={'block'} color={'success'} className={'ion-margin'}>Join Ionic Academy</IonButton>
        </CreateAnimation>
        <div ref={elementRef} style={{width: 50, height: 50, backgroundColor: 'red'}}></div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;