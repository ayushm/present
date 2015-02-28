


window.onload = function() {
  //var button = document.getElementsByClassName('fbRemindersStory')[1];

  var fbReminders = document.getElementsByClassName('fbRemindersStory');

  var button;

  for(var i=0; i<fbReminders.length;i++) {
    if(fbReminders[i].innerHTML.indexOf('birthday')>0) {
      button = fbReminders[i];
      break;
    }
  }

  console.log(button);

  button.onclick = addButtonsToBirthdayPopup;


}


var addButtonsToBirthdayPopup = function() {
  //console.log('hello');
  var myId = 'id';
  var myIdText = document.getElementsByClassName('_1ayn')[0].href;
  if(myIdText.indexOf('id=')>0) {
    myId = myIdText.substring(myIdText.indexOf('id=1')+3);
  } else {
    myId = myIdText.substring(myIdText.indexOf('com/')+4);
  }


  var birthdayPopup = document.getElementsByClassName('_4-hz')[0];

  var birthdays = birthdayPopup.getElementsByClassName('_5j0a');

  for(var i=0; i<birthdays.length;i++) {

    var idText = birthdays[i].getElementsByClassName('fwn')[0].getElementsByTagName('a')[0].href;

    var id = 'id';

    if(idText.indexOf('id=')>0) {
      id = idText.substring(idText.indexOf('id=1')+3);
    } else {
      id = idText.substring(idText.indexOf('com/')+4);
    }

    //console.log(id);

    //var myId = 'asdf';

    var birthdayDiv = document.createElement('DIV');
    birthdayDiv.class = 'birthdayDiv';
    var link = document.createElement('A');
    link.href = 'https://www.facebook.com/profile.php?id='+myId+'&and='+id+'&sk=photos';
    link.target = "_blank";

    birthdayDiv.appendChild(link);

    birthdays[i].appendChild(birthdayDiv);

  }
};

