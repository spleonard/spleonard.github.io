const API_KEY = "AIzaSyAOftusc_HYJalsJiwDJX95VGeUfbf5VhE";

const CALENDAR_ID =
"a5c71a77c8a586f1f64151d0852979d0bd28099330cf53ffda134252de524145@group.calendar.google.com";



const days = [
"sun",
"mon",
"tue",
"wed",
"thu",
"fri",
"sat"
];




async function getEvents(){


const now = new Date();


const end =
new Date();

end.setDate(
end.getDate()+14
);



const url =
`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`
+
`?singleEvents=true`
+
`&orderBy=startTime`
+
`&timeMin=${now.toISOString()}`
+
`&timeMax=${end.toISOString()}`
+
`&key=${API_KEY}`;



const response =
await fetch(url);


const data =
await response.json();



return data.items || [];

}





function addEventsToWeek(events){



events.forEach(event=>{


let date =
new Date(
event.start.dateTime || event.start.date
);



let day =
date.getDay();



let box =
document.getElementById(
days[day]
);



if(box){


box.innerHTML +=
`

<hr>

<strong>
${event.summary}
</strong>

<br>

${date.toLocaleTimeString(
"en-US",
{
hour:"numeric",
minute:"2-digit"
}
)}

`;

}


});

}





function displayUpcoming(events){


const container =
document.getElementById(
"events-list"
);



if(events.length===0){


container.innerHTML=
`
<div class="event-item">
<h4>No Events Currently Scheduled</h4>
</div>
`;


return;

}



container.innerHTML="";



events.slice(0,5)
.forEach(event=>{


let date =
new Date(
event.start.dateTime || event.start.date
);



container.innerHTML +=
`

<div class="event-item">

<h4>
${event.summary}
</h4>


<p>

${date.toLocaleDateString(
"en-US",
{
weekday:"long",
month:"long",
day:"numeric"
}
)}

<br>

${date.toLocaleTimeString(
"en-US",
{
hour:"numeric",
minute:"2-digit"
}
)}

</p>



${event.description ?
`<p>${event.description}</p>`
:
""}


</div>

`;


});


}






async function loadCalendar(){


try{


const events =
await getEvents();


addEventsToWeek(events);

displayUpcoming(events);



}

catch(error){


console.error(error);


}

}



loadCalendar();