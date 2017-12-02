/*
$("#main").append("Basant Singh");

var firstName = "Basant";

var age = 24;

console.log(firstName);

var awesomeThoughts = "I am Basant and I am AWESOME!";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME!","FUN");

$("#main").append(funThoughts);
*/

// $("#main").append(bio.name, bio.role, bio.welcomeMessage, bio.skills, bio.bioPic);

/*
var name = "Basant Singh";

var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

/*
var skills = ["awesomeness", "programming", "teaching", "JS"];
 $("#main").append(skills);
 $("#main").append(skills[0]);
$("#main").append(skills.length);
*/

/*
var work = {};
work.position = "President";
work.employer = "SJS Wireless Corp";
work.years = 1.5;
*/

/*
var education = {};
education["name"] = "Keiser University";
education["years"] = "2014-2017"
education["city"] = "Sarasota, FL, US";

$("#main").append(work["position"]);
$("#main").append(education.name);
*/


/*
var cameron = {};
cameron.job = "course dev";

var makeCourse = function() {
    // make a course
    console.log("Made a course");
}

var courses = 0;
while(cameron.job === "course dev") {
    makeCourse();
    courses = courses + 1;
    if (courses === 10) {
        cameron.job = "learning specialist";
    }
}

console.log(cameron.job);
*/

/*
for (var i = 0; i < 9; i++) {
    console.log(i);
};
*/

/*
var countries = [
    "Germany", "Argentina", "Brazil", "Netherlands"
];

for (country in countries) {
    console.log(countries[country]);
}
*/

/*
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});
*/

/*
function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

console.log(locationizer(work));
*/