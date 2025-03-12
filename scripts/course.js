const courses = [
    { name: "WDD 230 - Web Development", code: "WDD", credits: 3, completed: true },
    { name: "WDD 231 - Frontend Development", code: "WDD", credits: 3, completed: false },
    { name: "CSE 210 - Programming with Classes", code: "CSE", credits: 3, completed: true },
    { name: "CSE 220 - Data Structures", code: "CSE", credits: 3, completed: false }
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

document.addEventListener("DOMContentLoaded", () => {
    displayCourses(courses);
});
