import React from 'react';
import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
  import { Redirect } from 'react-router';  
  import { Link } from 'react-router-dom';
  import { useAuth } from '../auth';
//   import { auth } from '../firebase';

  interface Props { //TypeScript allows us to set the data that is being passed
    //   loggedIn: boolean;
      onLogin: () => void;
  }
  
  const LoginPage: React.FC <Props> = ({ onLogin }) => {
      const { loggedIn } = useAuth();
      if (loggedIn) { //check to see if the user is logged in
          return <Redirect to='/my/images' />
      }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
         <IonButton expand='block' onClick={onLogin}>Log in</IonButton>
          <Link to='/my/images'>Back to Home</Link>
        </IonContent>
      </IonPage>
    );
  };
  
  export default LoginPage;
  