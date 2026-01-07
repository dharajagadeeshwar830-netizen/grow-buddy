let growthRecords = [];
let milestoneRecords = [];
let vaccineRecords = [];

/* Growth elements */
const ageInput = document.getElementById("ageInput");
const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const growthDate = document.getElementById("growthDate");
const addGrowthBtn = document.getElementById("addGrowthBtn");

const childAge = document.getElementById("childAge");
const heightValue = document.getElementById("heightValue");
const weightValue = document.getElementById("weightValue");
const growthTable = document.getElementById("growthTable");

/* Milestone elements */
const milestoneTitle = document.getElementById("milestoneTitle");
const milestoneDesc = document.getElementById("milestoneDesc");
const milestoneDate = document.getElementById("milestoneDate");
const addMilestoneBtn = document.getElementById("addMilestoneBtn");
const milestoneTable = document.getElementById("milestoneTable");

/* Vaccination elements */
const vaccineName = document.getElementById("vaccineName");
const vaccineDate = document.getElementById("vaccineDate");
const vaccineStatus = document.getElementById("vaccineStatus");
const addVaccineBtn = document.getElementById("addVaccineBtn");
const vaccineTable = document.getElementById("vaccineTable");

/* Add growth record */
addGrowthBtn.addEventListener("click", () => {
    const age = Number(ageInput.value);
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);
    const date = growthDate.value;

    if (!age || !height || !weight || !date) {
        alert("Please enter all growth details");
        return;
    }

    growthRecords.push({ age, height, weight, date });

    childAge.textContent = age;
    heightValue.textContent = height + " cm";
    weightValue.textContent = weight + " kg";

    renderGrowthTable();

    ageInput.value = "";
    heightInput.value = "";
    weightInput.value = "";
    growthDate.value = "";
});

/* Render growth table */
function renderGrowthTable() {
    growthTable.innerHTML = "";
    growthRecords.forEach(rec => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${rec.age}</td>
            <td>${rec.height}</td>
            <td>${rec.weight}</td>
            <td>${rec.date}</td>
        `;
        growthTable.appendChild(row);
    });
}

/* Add milestone */
addMilestoneBtn.addEventListener("click", () => {
    const title = milestoneTitle.value;
    const desc = milestoneDesc.value;
    const date = milestoneDate.value;

    if (!title || !date) {
        alert("Please enter milestone details");
        return;
    }

    milestoneRecords.push({ title, desc, date });
    renderMilestoneTable();

    milestoneTitle.value = "";
    milestoneDesc.value = "";
    milestoneDate.value = "";
});

/* Render milestone table */
function renderMilestoneTable() {
    milestoneTable.innerHTML = "";
    milestoneRecords.forEach(rec => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${rec.title}</td>
            <td>${rec.desc}</td>
            <td>${rec.date}</td>
        `;
        milestoneTable.appendChild(row);
    });
}

/* Add vaccination */
addVaccineBtn.addEventListener("click", () => {
    const name = vaccineName.value;
    const date = vaccineDate.value;
    const status = vaccineStatus.value;

    if (!name || !date) {
        alert("Please enter vaccination details");
        return;
    }

    vaccineRecords.push({ name, date, status });
    renderVaccineTable();

    vaccineName.value = "";
    vaccineDate.value = "";
    vaccineStatus.value = "Pending";
});

/* Render vaccination table */
function renderVaccineTable() {
    vaccineTable.innerHTML = "";
    vaccineRecords.forEach(rec => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${rec.name}</td>
            <td>${rec.date}</td>
            <td>${rec.status}</td>
        `;
        vaccineTable.appendChild(row);
    });
}
