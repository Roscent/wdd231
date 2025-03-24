const courses = [
    {
        name: "WDD 230 - Web Development",
        code: "WDD",
        credits: 3,
        completed: true,
        subject: "WDD",
        number: "230",
        title: "Web Development",
        description: "Introduction to web development principles and practices.",
        certificate: "Available upon completion",
        technology: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "WDD 231 - Frontend Development",
        code: "WDD",
        credits: 3,
        completed: false,
        subject: "WDD",
        number: "231",
        title: "Frontend Development",
        description: "Advanced frontend development techniques and frameworks.",
        certificate: "Available upon completion",
        technology: ["React", "Vue", "SASS"]
    },
    {
        name: "CSE 210 - Programming with Classes",
        code: "CSE",
        credits: 3,
        completed: true,
        subject: "CSE",
        number: "210",
        title: "Programming with Classes",
        description: "Object-oriented programming concepts and design patterns.",
        certificate: "Available upon completion",
        technology: ["Python", "Java", "C++"]
    },
    {
        name: "CSE 220 - Data Structures",
        code: "CSE",
        credits: 3,
        completed: false,
        subject: "CSE",
        number: "220",
        title: "Data Structures",
        description: "Fundamental data structures and algorithms.",
        certificate: "Available upon completion",
        technology: ["Java", "C", "Algorithms"]
    }
];

function displayCourses(filteredCourses) {
    const courseContainer = document.getElementById("courses-container");
    courseContainer.innerHTML = "";

    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");
        if (course.completed) {
            courseDiv.classList.add("completed");
        }

        courseDiv.innerHTML = `<strong>${course.name}</strong> - ${course.credits} Credits`;
        courseContainer.appendChild(courseDiv);

        // Add click event listener to each course div
        courseDiv.addEventListener('click', () => {
            displayCourseDetails(course);
        });

        totalCredits += course.credits;
    });

    document.getElementById("total-credits").textContent = totalCredits;
}

function filterCourses(type) {
    if (type === "all") {
        displayCourses(courses);
    } else {
        const filtered = courses.filter(course => course.code === type);
        displayCourses(filtered);
    }
}

function displayCourseDetails(course) {
    const courseDetails = document.getElementById("course-details");
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
        <button id="closeButton">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();

    // Close modal when clicking the close button
    document.getElementById("closeButton").addEventListener("click", () => {
        courseDetails.close();
    });

    // Close modal when clicking outside of it
    courseDetails.addEventListener("click", (e) => {
        if (e.target === courseDetails) {
            courseDetails.close();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayCourses(courses);
});