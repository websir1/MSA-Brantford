// Initialize attendees from localStorage or use the default list if not available or expired
const defaultAttendees = [
    { name: "Alice", number: "1", registered: false },
    { name: "Bob", number: "2", registered: false },
    { name: "Charlie", number: "3", registered: false },
    { name: "Diana", number: "4", registered: false },
    { name: "Evan", number: "5", registered: false }
];

// Attempt to load data if it's less than 24 hours old
let storedData = localStorage.getItem('registeredData');
let registeredAttendees = defaultAttendees;
if (storedData) {
    storedData = JSON.parse(storedData);
    if (new Date().getTime() - storedData.timestamp < 86400000) {
        registeredAttendees = storedData.attendees;
    }
}

function saveToLocalStorage() {
    const data = {
        attendees: registeredAttendees,
        timestamp: new Date().getTime()
    };
    localStorage.setItem('registeredData', JSON.stringify(data));
}

function populateTable() {
    const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows
    registeredAttendees.forEach((attendee, index) => {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = attendee.number;
        cell2.innerHTML = attendee.name;
        if (attendee.registered) {
            row.classList.add('registered');
        }
    });
    updateCounts();
}

function updateCounts() {
    const registeredCount = registeredAttendees.filter(attendee => attendee.registered).length;
    const remainingCount = registeredAttendees.length - registeredCount;

    document.getElementById('registeredCount').textContent = `Registered: ${registeredCount}`;
    document.getElementById('remainingCount').textContent = `Remaining: ${remainingCount}`;
}

function checkRegistration() {
    const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    const glassSound = document.getElementById('glassSound');
    
    glassSound.play();
    let found = false;
    let alreadyRegistered = false;

    registeredAttendees.forEach((attendee, index) => {
        if (attendee.name.toLowerCase() === nameInput) {
            found = true;
            if (attendee.registered) {
                alreadyRegistered = true;
            } else {
                attendee.registered = true; // Mark as registered
                document.getElementById('studentsTable').getElementsByTagName('tbody')[0].rows[index].classList.add('registered');
            }
        }
    });

    if (alreadyRegistered) {
        resultDiv.innerHTML = '<span style="color: red;">Already Marked</span>';
    } else if (found) {
        resultDiv.innerHTML = '<span style="color: green;">Registered</span>';
        saveToLocalStorage(); // Save updated status to localStorage
    } else {
        resultDiv.innerHTML = '<span style="color: red;">Person Not Found</span>';
    }
    updateCounts();
}

window.onload = function() {
    populateTable();
};
