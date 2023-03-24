import firebase from 'firebase';
export const inicializarFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "Seu messagingSenderId"
  });
}