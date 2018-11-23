  var i = 0;      
  var images = [];  
  var time = 5000;  
     
  images[0] = "Images/Coding and Robotics Sunday Jbeil 1.jpg";
  images[1] = "Images/Robotics Day 2017 RHU.jpg";
  images[2] = "Images/download.jpg";
  images[3] = "Images/Some random asshole.jpg";
  images[4] = "Images/astrology is pseudoscience.jpg";
  images[5] = "Images/astrology is pseudoscience 2.jpg";

  function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
      i++; 
    } else { 
      i = 0;
    }

    setTimeout("changeImg()", time);
  }

  window.onload=changeImg;


  var config = {
    apiKey: "AIzaSyBtUFBcknkt1Fba6RgFnOgP48HOVR0xFn8",
    authDomain: "mywebsite-447a2.firebaseapp.com",
    databaseURL: "https://mywebsite-447a2.firebaseio.com",
    projectId: "mywebsite-447a2",
    storageBucket: "mywebsite-447a2.appspot.com",
    messagingSenderId: "982372420402"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database();

document.getElementById('contactForm').addEventListener('submit', submitForm());

function submitForm(e){
	var emailAct = document.getElementById('email1').value;
	var messageAct = document.getElementById('message1').value;

	saveMessage(emailAct, messageAct);

}


function saveMessage(email, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		email: email1,
		message: message1
	});
}

