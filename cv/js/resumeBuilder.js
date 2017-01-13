var bio = {
    "name": "Beth Palmer",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "07523257537",
        "email": "bpalmer360@gmail.com",
        "github": "bethpalmer",
        "website": "www.bethpalmer.co.uk",
        "location": "Brighton and Hove"
    },
    "biopic": "images/profile.jpg",
    "welcomeMessage": "Helloooo, welcome to my online CV. where I get to tell you a bit about myself whilst also showing off some of my JavaScript skills. Happy you stopped by :)",
    "skills": ["HTML, CSS, JavaScript, JQuery, JSON, Git, SQL, Frameworks, Wordpress, UX, Illustrator",
        "Cross Browser and Device Testing, Scoping, Process Analysis, Troubleshooting, Desktop Support",
        "(some knowledge of) Ruby, Grunt, Infrastructure, SASS, BEM",
    ],
    "skillsImage": "images/awesomeness.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        var website = HTMLwebsite.replace("%data%", bio.contacts.website);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(email, mobile, github, website, location);

        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

        $(function() {
            $(".biopic").hover(
                function() {
                    $(".biopic").attr('src', 'images/liveWellOutlines1.jpg');
                },
                function() {
                    $(".biopic").attr('src', 'images/profile.jpg');
                }
            );
        });


        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);

        function displaySkills1() {
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
        displaySkills1();

        var image = HTMLskillsImage.replace("%data%", bio.skillsImage);
        $("#skills").append(image);

        $("#skills").mouseover(function() {
            $(".skillstext").removeClass("show").addClass("hide");
            $(".awesome").removeClass("hide").addClass("show");
        });
        $("#skills").mouseout(function() {
            $(".awesome").removeClass("show").addClass("hide");
            $(".skillstext").removeClass("hide").addClass("show");
        });
    }
};

var work = {
    "jobs": [{
        "title": "IT Coordinator",
        "employer": "Concordia Ltd",
        "dates": "Jun 2010 - Dec 2014",
        "location": "Portslade",
        "description":
            "<ul class='work'>" +
            "<li>Managed all aspects of IT provision and support for this organisation of 25, including IT strategy, database, infrastructure, customer portals and office tech.</li>" +
            "<li>Conceived, designed and managed the implementation of a £100k workflow management system to replace legacy database and customer portals.</li>" +
            "<li>Enabled customers to interface directly with the system reducing administration hours spent on data entry by at least 10% year.</li>" +
            "<li>Planned and managed the implementation of the virtualisation of internal infrastructure from an array of outdated servers, neutralising the risk of hardware failure.</li></ul>",
        "url": "http://www.concordia.org.uk/"
    }, {
        "title": "Service Desk Operator for the NHS",
        "employer": "Sussex HIS",
        "dates": "Nov 2009 - Jun 2010",
        "location": "Hastings / Durrington",
        "description": "<ul class='work'>" +
            "<li>Worked as part of team providing advice and tech help to a large body of NHS users.</li>" +
            "<li>Undertook basic infrastructure support and remote troubleshooting helping the team achieve its target first-line fix rates whilst providing great customer service.</li></ul>",
        "url": "#"
    }],
    
    "display": function() {
        work.jobs.forEach(function(workInfo) {
            $("#workExperience").append(HTMLworkStart);

            var workEmployer = HTMLworkEmployer.replace("%data%", workInfo.employer).replace("#", workInfo.url);
            var workTitle = HTMLworkTitle.replace("%data%", workInfo.title);
            var workEmployerAndTitle = workEmployer + workTitle;
            var workDates = HTMLworkDates.replace("%data%", workInfo.dates);
            var workLocation = HTMLworkLocation.replace("%data%", workInfo.location);
            var workDescription = HTMLworkDescription.replace("%data%", workInfo.description);
            $(".work-entry:last").append(workEmployerAndTitle, workDates, workLocation, workDescription);
        });

    }
};

var projects = {
    "projects": [{
        "title": "Mondays Child UK",
        "dates": "Dec 2016 - Jan 2017",
        "description": "<ul class='work'>" +
            "<li>Analysed existing site to inform scoping and defining brief with the client.</li>" +
            "<li>Fulfilled the brief by creating a fully responsive website using the bootstrap framework, retaining the urban edgy look of the brand, marrying it with simplicity and space.</li></ul>",
        "images": ["../images/mcuk.jpg", "../images/mcuk-about.jpg", "../images/mcuk-mobile.jpg"],
        "url": "../mcuk/index.html"
    }, {
        "title": "Online CV",
        "dates": "Nov 2016",
        "description":"<ul class='work'>" +
            "<li>Created a responsive online CV using dynamic HTML laoded via jQuery from JavaScript objects making future updates easier.</li>" +
            "<li>Included an interactive map of where I’ve lived and worked and rollover images on profile pic and skills section for added flavour.</li></ul>",
        "images": ["../images/resume.jpg", "../images/map.jpg"],
        "url": "#"
    }, {
        "title": "Portfolio site",
        "dates": "Sept 2016",
        "description": "A single page portfolio site created to display my development work and graphics skills.",
        "images": ["../images/portfolio.jpg"],
        "url": "../index.html"
    }],
    "display": function() {
        projects.projects.forEach(function(projectInfo) {
            $("#projects").append(HTMLprojectStart);

            var projectTitle = HTMLprojectTitle.replace("%data%", projectInfo.title);
            var projectDates = HTMLprojectDates.replace("%data%", projectInfo.dates);
            var projectDescription = HTMLprojectDescription.replace("%data%", projectInfo.description);
            $(".project-entry:last").append(projectTitle, projectDates, projectDescription);
            for (var i = 0; i < projectInfo.images.length; i++) {
                var projectImage = HTMLprojectImage.replace("%data%", projectInfo.images[i]);
                $(".project-entry:last").append(projectImage);
            }
        });
    }
};

var education = {
    "schools": [{
        "name": "The Ashcombe Secondary School",
        "dates": "1994 - 1999",
        "location": "Dorking, Surrey",
        "degree": "GCSEs",
        "majors": ["English Lit (A)", "English Lang (B)", "Dual Science (A,A)", "Maths (B)", "French (A)", "Geography (A)", "Graphic Design (A)", "Music (A)"],
        "url": "http://www.ashcombe.surrey.sch.uk/"
    }, {
        "name": "Collyers College",
        "dates": "2000 - 2002",
        "location": "Horsham, West Sussex",
        "degree": "A-levels",
        "majors": ["Graphic Communication (B)", "Media Studies (B)", "Law (B)"],
        "url": "http://www.collyers.ac.uk/"
    }, {
        "name": "Cerco IT Training Centre",
        "dates": "Sept 2009, 4 week residential",
        "location": "Crewe",
        "degree": "CCSN (Cerco Certified Systems and Networks) Engineer",
        "majors": ["Hardware Systems and Networks"],
        "url": "https://cercoit.co.uk/"
    }],
    "onlineCourses": [{
        "title": "Front-end Developer Nanodegree",
        "school": "Udacity",
        "dates": "Jul 2016 - present",
        "url": "https://www.udacity.com"
    }, {
        "title": "JavaScript Basics / Introduction to JQuery",
        "school": "Team Treehouse",
        "dates": "Aug - Sept 2016",
        "url": "https://teamtreehouse.com"
    }],
    "display": function() {
        education.schools.forEach(function(schoolInfo) {
            $("#education").append(HTMLschoolStart);

            var schoolName = HTMLschoolName.replace("%data%", schoolInfo.name).replace("#", schoolInfo.url);
            var schoolDegree = HTMLschoolDegree.replace("%data%", schoolInfo.degree);
            var nameAndDegree = schoolName + schoolDegree;
            var schoolDates = HTMLschoolDates.replace("%data%", schoolInfo.dates);
            var schoolLocation = HTMLschoolLocation.replace("%data%", schoolInfo.location);
            $(".education-entry:last").append(nameAndDegree, schoolDates, schoolLocation);
            for (var i = 0; i < schoolInfo.majors.length; i++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", schoolInfo.majors[i]);
                $(".education-entry:last").append(formattedMajor);
            }
        });
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(courseInfo) {
            $("#education").append(HTMLschoolStart);

            var courseTitle = HTMLonlineTitle.replace("%data%", courseInfo.title).replace("#", courseInfo.url);
            var courseSchool = HTMLonlineSchool.replace("%data%", courseInfo.school);
            var titleAndSchool = courseTitle + courseSchool;
            var courseDates = HTMLonlineDates.replace("%data%", courseInfo.dates);
            var courseURL = HTMLonlineURL.replace("%data%", courseInfo.url).replace("#", courseInfo.url);
            $(".education-entry:last").append(titleAndSchool, courseDates, courseURL);
        });
    }
};

function inName(name) {
    name = bio.name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

bio.display();
work.display();
projects.display();
education.display();

// $("#workExperience").prepend(internationalizeButton);

$("#mapDiv").append(googleMap);
