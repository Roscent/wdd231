const courses = [
    { name: "WDD 230 - Web Frontend Development", code: "WDD230", credits: 3, completed: true },
    { name: "WDD 231 - Web Frontend II", code: "WDD231", credits: 3, completed: false },
    { name: "CSE 210 - Programming with Classes", code: "CSE210", credits: 3, completed: true },
    { name: "CSE 222 - Data Structures", code: "CSE222", credits: 3, completed: false },
];

const courseList = document.getElementById("course-list");
const totalCredits = document.getElementById("total-credits");

function displayCourses(filter = "all") {
    courseList.innerHTML = "";
    let filteredCourses = courses;

    if (filter !== "all") {
        filteredCourses = courses.filter(course => course.code.startsWith(filter.toUpperCase()));
    }

    let creditSum = 0;

    filteredCourses.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("course-card");
        div.classList.add(course.completed ? "completed" : "not-completed");
        div.innerHTML = `${course.name} - ${course.credits} Credits`;
        courseList.appendChild(div);
        creditSum += course.credits;
    });

    totalCredits.textContent = creditSum;
}

// Event Listeners
document.getElementById("all").addEventListener("click", () => displayCourses("all"));
document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));
document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));

// Default display
displayCourses();