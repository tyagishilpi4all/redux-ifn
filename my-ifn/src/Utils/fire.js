import firebase from 'firebase';

/*--------------------------------for staging-configration------------------------------------------*/

const firebaseConfig = {
    apiKey: "AIzaSyD-K4pLxCfY5cnOYqIXf_mdpTlHgxeNyvE",
    authDomain: "testif-df134.firebaseapp.com",
    databaseURL: "https://testif-df134.firebaseio.com",
    projectId: "testif-df134",
    storageBucket: "testif-df134.appspot.com",
    messagingSenderId: "818769410389",
    appId: "1:818769410389:web:1812ba426aacf4118057dc"
  };  
  
const firebaseIs = firebase.initializeApp(firebaseConfig);

export default firebaseIs;

// export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();