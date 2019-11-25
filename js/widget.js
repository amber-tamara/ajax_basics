var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();


var roomRequest = new XMLHttpRequest(); /*This transfers data between a web browser and a web server.*/
roomRequest.onreadystatechange = function () { /*The readystatechange event is fired when the readyState attribute of a document has changed*/
  if(roomRequest.readyState === 4 && roomRequest.status === 200) { /*number 4 means, once all of the content is downloaded and is ready to be used*/
    var rooms = JSON.parse(roomRequest.responseText); /*the JSON.parse, turns the JSON string into a JAVASCRIPT
     object. You can find out what an element is by using the 'typeof' attribute, is would say 'string' if you
     were to replace that with the JSON.parse*/
    var statussHTML = '<ul class="rooms">'; /*an ul list is create and added to the variable 'statussHTML'*/
    for (var i=0; i<rooms.length; i += 1) { /*The for loop processes through all of the data 'rooms'*/
      if (rooms[i].available === true) {  
        statussHTML += '<li class="empty">';  /*If a room is available meaning 'true', it will show as 'empty' */
      } else {
        statussHTML += '<li class="full">'; /*Or else if false it will show as 'full */
      }
      statussHTML += rooms[i].room; /*rooms[i] accesses the data list(for loop), then the property/key of 'room' is selected and the value of room will be shown (the room number)*/
      statussHTML += '</li>'; /*Then the data of the room value is added to the list */
    }
    statussHTML += '</ul>'; /*The end of the unordered list */
    document.getElementById('roomList').innerHTML = statussHTML; 
  }
};
roomRequest.open('GET', '../data/rooms.json'); /* "open" opens up the file ../data/rooms.json */
roomRequest.send(); /* "send" sends the file. */

/*I didn't have to change 'statusHTML' to 'statussHTML' 
When a web server sends JSON-formatted data it sends a string */