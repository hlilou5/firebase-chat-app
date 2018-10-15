 document.getElementById('form').addEventListener('submit', submitForm);

function getInputVal(id){
    return document.getElementById(id).value;
}
function submitForm(e){
        e.preventDefault();
        // Get values
        var message = getInputVal('message');
        saveMessage(message);
        document.getElementById('form').reset();
    }









  var config = {
    apiKey: "AIzaSyDWr33hhC5yjN5sM--KdII3daKbY8EH_Ro",
    authDomain: "chat-app-8ee08.firebaseapp.com",
    databaseURL: "https://chat-app-8ee08.firebaseio.com",
    projectId: "chat-app-8ee08",
    storageBucket: "chat-app-8ee08.appspot.com",
    messagingSenderId: "252989308533"
  };
  firebase.initializeApp(config);
  var messagesRef = firebase.database().ref('messages');
  function saveMessage(message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      message:message,
    });
  }