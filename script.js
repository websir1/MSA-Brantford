// Assuming the initial students array is correctly defined
  let students = [
   { name: "Muhammad Ali Rahim Khan", number: "169046480", days: ["Monday", "Wednesday", "Thursday"], dietary: "Halal", registeredToday: false },
    { name: "Saim Asif", number: "W20631602", days: ["Monday", "Wednesday", "Thursday"], dietary: "no restrictions", registeredToday: false },
{ name: "Farhan Rizwan", number: "169077199", days: ["Monday", "Thursday"], dietary: "None", registeredToday: false },
{ name: "Raahim", number: "169074136", days: ["Monday", "Wednesday", "Thursday"], dietary: "None", registeredToday: false },
{ name: "Zayed", number: "169074868", days: ["Wednesday", "Thursday"], dietary: "None", registeredToday: false },
{ name: "Maham Wyne", number: "200766570", days: ["Monday", "Wednesday", "Thursday"], dietary: "None", registeredToday: false },
{ name: "malak sameh ahmed", number: "W20779501", days: ["Wednesday"], dietary: "nothing", registeredToday: false },
{ name: "Ibrahim Sadi Moon", number: "W20688903", days: ["Monday", "Wednesday", "Thursday"], dietary: "No", registeredToday: false },
{ name: "Shayaan", number: "169073446", days: ["Monday", "Wednesday", "Thursday"], dietary: "None", registeredToday: false },
{ name: "Aezah Azfar", number: "169072203", days: ["Wednesday"], dietary: "Halal meat only.", registeredToday: false },
{ name: "Mohammad Tariq", number: "169070643", days: ["Monday", "Wednesday", "Thursday"], dietary: "NONE", registeredToday: false },
{ name: "Zulqarnayeen Sadid", number: "169075017", days: ["Monday", "Wednesday", "Thursday"], dietary: "N/A", registeredToday: false },
{ name: "Fatmah Yasin", number: "169075296", days: ["Monday", "Wednesday", "Thursday"], dietary: "N/A", registeredToday: false },
{ name: "Ainee Fowmy", number: "169075016", days: ["Monday", "Wednesday", "Thursday"], dietary: "Halal", registeredToday: false },
{ name: "Raqeebuddin Ahmed", number: "W20724703", days: ["Monday", "Wednesday", "Thursday"], dietary: "Anything with chicken like roti or something but no beef, I have allergy with beef", registeredToday: false },
{ name: "Muhammad Saad Raja", number: "000006910", days: ["Monday", "Wednesday", "Thursday"], dietary: "Halal", registeredToday: false },
{ name: "Syed Shaheer Rizvi", number: "000006927", days: ["Monday", "Wednesday", "Thursday"], dietary: "Halal", registeredToday: false },
{ name: "Areeb Mohsin", number: "169037102", days: ["Monday", "Wednesday", "Thursday"], dietary: "N/a", registeredToday: false },
{ name: "Luvsha Jesly", number: "210717590", days: ["Monday", "Wednesday", "Thursday"], dietary: "None", registeredToday: false },
{ name: "Hassan", number: "W20526301", days: ["Monday", "Wednesday", "Thursday"], dietary: "Hallal", registeredToday: false },
{ name: "Amani Harris", number: "210733600", days: ["Monday", "Wednesday"], dietary: "Halal", registeredToday: false },
{ name: "Mohammad Abu-Rshaid", number: "190715230", days: ["Monday", "Wednesday", "Thursday"], dietary: "Cinnamon", registeredToday: false },
{ name: "Tayla Snache", number: "190170910", days: ["Monday", "Wednesday", "Thursday"], dietary: "N/A", registeredToday: false },
{ name: "Muhammad Taha Atif", number: "169063832", days: ["Monday"], dietary: "none", registeredToday: false },
{ name: "Jarin Tasnim Jara", number: "W20756201", days: ["Wednesday", "Thursday"], dietary: "No restrictions", registeredToday: false },
{ name: "Sadia Yesmen", number: "W20716403", days: ["Monday", "Wednesday", "Thursday"], dietary: "I can’t eat peanut.", registeredToday: false },
{ name: "Aliasgar Cuttleriwala", number: "169080941", days: ["Monday", "Wednesday", "Thursday"], dietary: "None", registeredToday: false },
{ name: "Kashif Choudhary", number: "169044631", days: ["Monday", "Wednesday", "Thursday"], dietary: "No dietary restrictions", registeredToday: false },
{ name: "Abdelghani", number: "169048115", days: ["Wednesday", "Thursday"], dietary: "Pork", registeredToday: false },
{ name: "Musawwir Ahmed", number: "169073154", days: ["Monday", "Wednesday", "Thursday"], dietary: "Halal", registeredToday: false },
{ name: "Shahrez Ahmed.", number: "212096010", days: ["Monday", "Wednesday", "Thursday"], dietary: "None", registeredToday: false },
{ name: "Muhammad Abdullah Ejaz", number: "169077281", days: ["Monday", "Wednesday", "Thursday"], dietary: "None", registeredToday: false }
 ];
students.push(
  { name: "Mustafa Khalil", number: "W2064963", days: ["Monday", "Wednesday", "Thursday","Friday"], dietary: "No", registeredToday: false },
{ name: "haider", number: "169062442", days: ["Monday", "Wednesday"], dietary: "N/A", registeredToday: false },
{ name: "Noor Ali", number: "210944890", days: ["Monday", "Wednesday", "Thursday"], dietary: "N/A", registeredToday: false },
{ name: "Rehan Moolla", number: "200754810", days: ["Monday", "Wednesday", "Thursday"], dietary: "none", registeredToday: false },
{ name: "Fatimah Patel", number: "169043589", days: ["Monday", "Wednesday", "Thursday"], dietary: "None", registeredToday: false },
{ name: "Fadhil Shifaa", number: "169077453", days: ["Wednesday", "Thursday"], dietary: "Anything will do but Preferably Low fat, high protein", registeredToday: false },
{ name: "Don't know", number: "169054510", days: ["Monday", "Wednesday", "Thursday"], dietary: "Halal", registeredToday: false },
{ name: "Hannan Khan", number: "169054510", days: ["Wednesday"], dietary: "Halal", registeredToday: false },
{ name: "Abdulhakim Farah", number: "169073089", days: ["Monday", "Wednesday", "Thursday"], dietary: "Just halal ofc", registeredToday: false },
{ name: "Zeckria Farah", number: "210747030", days: ["Monday", "Wednesday", "Thursday"], dietary: "Nothing", registeredToday: false },);


document.addEventListener("DOMContentLoaded", function() {
    loadDataFromLocalStorage(); // Ensure this runs first to load any saved data
    populateTable(); // Populate table with current data
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('studentNumberInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkRegistration();
        }
    });

    // Add listeners for your filtering if needed
}

function showRegistered() {
    const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows before filtering
    const registeredStudents = students.filter(student => student.registeredToday);

    registeredStudents.forEach(student => {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.textContent = student.number;
        cell2.textContent = student.name;
        cell3.textContent = student.days.join(", ");
        cell4.textContent = student.dietary;
        
        // Since we're showing registered students, highlight all rows in green
        row.style.backgroundColor = 'lightgreen';
    });

    // Update the counts to reflect the filtered view if necessary
    // This step is optional based on whether you want the counts to reflect the total or the filtered view
    document.getElementById('registeredCount').textContent = `Registered: ${registeredStudents.length}`;
    document.getElementById('remainingCount').textContent = `Remaining: ${students.length - registeredStudents.length}`;
}

function showRemaining() {
    const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows
    students.filter(student => !student.registeredToday).forEach(student => {
        addStudentRow(student, tableBody);
    });
}
function exportToCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Student Number,Student Name,Pick-up Days,Dietary Restrictions,Registered Today\n"; // Header

    students.forEach(student => {
        let row = `${student.number},${student.name},"${student.days.join(", ")}",${student.dietary},${student.registeredToday ? "Yes" : "No"}`;
        csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "students_data.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "students_data.csv".
}


function addStudentRow(student, tableBody) {
    let row = tableBody.insertRow();
    row.id = `student-${student.number}`;
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.textContent = student.number;
    cell2.textContent = student.name;
    cell3.textContent = student.days.join(", ");
    cell4.textContent = student.dietary;

}

function setupEventListeners() {
    document.getElementById('studentNumberInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkRegistration();
        }
    });

    // Existing listeners...

    // Listener for clearing local storage
    document.getElementById('clearLocalStorageButton').addEventListener('click', function() {
        localStorage.clear();
        alert('Local storage cleared!');
        // You might need to refresh your data or UI here
        students = []; // Reset the students array if it's being loaded from local storage
        populateTable(); // Repopulate the table, now it will be empty
        updateCounts(); // Update counts to reflect the cleared data
    });
}
document.addEventListener("DOMContentLoaded", function() {
    loadDataFromLocalStorage(); // Ensure this runs first to load any saved data
    populateTable(); // Populate table with current data
    setupEventListeners();
});


function populateTable() {
    const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Ensure the table is cleared first
    students.forEach(student => {
        addStudentRow(student, tableBody);
    });
    updateCounts(); // Update the counts based on current data
}

function addStudentRow(student, tableBody) {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.textContent = student.number;
    cell2.textContent = student.name;
    cell3.textContent = student.days.join(", ");
    cell4.textContent = student.dietary;

    if (student.registeredToday) {
        row.style.backgroundColor = 'lightgreen'; // Highlight if registered today
    }
}

function checkRegistration() {
    const studentNumberInput = document.getElementById('studentNumberInput').value.trim();
    const resultDiv = document.getElementById('result');
    const student = students.find(s => s.number === studentNumberInput);

    if (student) {
        const today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
        const isRegisteredForToday = student.days.includes(today);

        if (student.registeredToday) {
            resultDiv.textContent = `${student.name} is already registered for today.`;
            resultDiv.style.color = 'red';
        } else if (isRegisteredForToday) {
            student.registeredToday = true; // Mark as registered
            resultDiv.textContent = `${student.name} is now registered for today.`;
            resultDiv.style.color = 'green';
            saveDataToLocalStorage(); // Save the updated status
            populateTable(); // Refresh the table to reflect changes
        } else {
            resultDiv.textContent = `${student.name} is not registered for today.`;
            resultDiv.style.color = 'red';
        }
    } else {
        resultDiv.textContent = 'Student not found.';
        resultDiv.style.color = 'red';
    }
}

function saveDataToLocalStorage() {
    localStorage.setItem('studentsData', JSON.stringify(students));
}

function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem('studentsData');
    if (storedData) {
        students = JSON.parse(storedData);
    }
}

function updateCounts() {
    const registeredTodayCount = students.filter(student => student.registeredToday).length;
    document.getElementById('registeredCount').textContent = `Registered: ${registeredTodayCount}`;
    document.getElementById('remainingCount').textContent = `Remaining: ${students.length - registeredTodayCount}`;
}
