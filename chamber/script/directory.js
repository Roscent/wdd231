document.addEventListener("DOMContentLoaded", async () => {
    const directory = document.getElementById("directory");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    let members = [];

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            members = await response.json();
            displayMembers(members, "grid");
        } catch (error) {
            console.error("Error fetching member data:", error);
        }
    }

    function displayMembers(members, view) {
        directory.innerHTML = "";
        directory.className = view;

        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member");

            memberElement.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            directory.appendChild(memberElement);
        });
    }

    gridViewBtn.addEventListener("click", () => displayMembers(members, "grid"));
    listViewBtn.addEventListener("click", () => displayMembers(members, "list"));

    fetchMembers();
});