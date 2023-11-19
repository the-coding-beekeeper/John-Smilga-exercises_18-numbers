const succeededProjects = document.querySelector(".succeeded-projects");
const workingHours = document.querySelector(".working-hours");
const happyClients = document.querySelector(".happy-clients");

const projects = document.querySelector(".projects");
const hours = document.querySelector(".hours");
const clients = document.querySelector(".clients");

let projectsNumber = 0;
let hoursNumber = 0;
let clientsNumber = 0;

document.addEventListener("DOMContentLoaded", () => {
    projects.textContent = 0;
    hours.textContent = 0;
    clients.textContent = 0;
    projectsNumber = 0;
    hoursNumber = 0;
    clientsNumber = 0;

})
function counting() {
    projectsNumber++;
    hoursNumber +=17;
    clientsNumber +=2;
    projectsNumber >= 500 ? projectsNumber = 500 : projectsNumber = projectsNumber;
    hoursNumber >= 17140 ? hoursNumber = 17140 : hoursNumber = hoursNumber;
    clientsNumber >= 1500 ? clientsNumber = 1500 : clientsNumber = clientsNumber;
    projects.textContent = projectsNumber + " +";
    hours.textContent = hoursNumber + " +";
    clients.textContent = clientsNumber + " +";
    if (hoursNumber < 17140) {
        setTimeout(counting, 1);
    }
}
counting();