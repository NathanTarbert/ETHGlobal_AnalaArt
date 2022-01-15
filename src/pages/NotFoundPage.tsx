import {
  IonContent,
  IonPage,
} from '@ionic/react';
import React from 'react';
// import { auth } from '../firebase';

const NotFoundPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        Page not found.        
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;
