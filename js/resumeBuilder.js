var bio = {
    "name": "Basant Singh",
    "role": "Web Developer",
    "contacts": {
        "email": "basantsingh618@gmail.com",
        "github": "basant1",
        "twitter": "@1basantsingh",
        "location": "Sarasota"
    },
    "welcomeMessage": "Hi! My name is Basant Singh and I'm a software engineering student in Sarasota, FL.",
    "skills": [
        "HTML/CSS", "JS", "Bootstrap", "Java", "C#", "Python"
    ],
    "bioPic": "images/self-picture.jpg"
}

bio.display = function() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    //Check to see if the bio includes skills
    if (bio.skills.length > 0) {
        //append skills header into the pages #header section
        $("#header").append(HTMLskillsStart);

        //for each skill, append it the #skills list using a formatted element (standard for loop)
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    //$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

}
bio.display();


//function di
/*
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};
*/
// example of JSON
var education = {
    "schools": [
        {
            "name": "Keiser University",
            "location": "Sarasota, FL",
            "degree": ["Bachelor of Science"],
            "majors": ["Software Engineering"],
            "dates": "2014 - 2017",
            "url": "http://example.com"
        }
    ]
}

function displayEducation() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolNameAndDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameAndDegree);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajors);
    }
}

displayEducation();

var work = {
    "jobs": [
        {
            "employer": "Johnson Smith Company",
            "title": "Customer Care Representative",
            "dates": "September 2014 - October 2014",
            "description": "Representative places orders for the customer and deals with any questions the customer may have about their order."
        },
        {
            "employer": "SJS Wireless Corp - T-Mobile Authorized Retailer",
            "title": "President",
            "dates": "March 2013 - September 2014",
            "description": "President of SJS Wireless Corp, A T-Mobile Authorized Retailer. President manages entire store ensuring to meet desired sale goals per month."
        }
    ]
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

var projects = {
    "projects": [
        {
            "title": "Portfolio Website",
            "dates": "2016",
            "description": "A portfolio website showcasing my resume, projects, and contact info.",
            "images": [
                "images/portfolio-site.png"
            ]
        },
        {
            "title": "Paralegal Website",
            "dates": "2016",
            "description": "A paralegal website for my family business that I created using Wordpress as a content management system.",
            "images": [
                "images/paralegal-website.png"
            ]
        },
        {
            "title": "Break_Time Python Program",
            "dates": "2016",
            "description": "A video notification system that plays a YouTube video after a specific amount of time reminding you to take a break from the computer.",
            "images": [
                "images/break-time.png"
            ]
        },
        {
            "title": "Resume Builder",
            "dates": "2016",
            "description": "A resume I created using JS to showcase on my website.",
            "images": [
                "images/resume.png"
            ]
        }
    ]
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();