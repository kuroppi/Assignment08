// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    { id: 10000001, name: "Ray LaLonde", extension: 1111, email: "rlalonde@alset.com", department: "Administrative" },
    { id: 10000002, name: "Edward Collins", extension: 2222, email: "ecollins@alset.com", department: "Engineering" },
    { id: 10000003, name: "John Saito", extension: 3333, email: "jsaito@alset.com", department: "Executive" },
    { id: 10000004, name: "James Bowman", extension: 4444, email: "jbowman@alset.com", department: "Marketing" },
    { id: 10000005, name: "Terry Cooper", extension: 5555, email: "tcooper@alset.com", department: "Quality Assurance" },
    { id: 10000006, name: "Milo Cox", extension: 6666, email: "mcox@alset.com", department: "Sales" }
  ];  

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
}

// GET DOM ELEMENTS
const form = document.querySelector('#addForm');
const empTable = document.querySelector('#empTable');
const empCount = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    console.log('submitted');

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.querySelector('#id').value.trim();
    const name = document.querySelector('#name').value.trim();
    const extension = document.querySelector('#extension').value.trim();
    const email = document.querySelector('#email').value.trim();
    const department = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = {
        id: parseInt(id), // convert id to a number
        name: name,
        extension: parseInt(extension), // convert extension to a number
        email: email,
        department: department,
    };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            const row = e.target.parentNode.parentNode;
            const rowIndex = row.rowIndex - 1;

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex, 1);

            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employeesArray) {
    employeesArray = employeesArray || employees;
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const tbody = empTable.querySelector('tbody');
    tbody.remove();

    // REBUILD THE TBODY FROM SCRATCH
    const newTbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    employeesArray.forEach((employee, index) => {
        // REBUILDING THE ROW STRUCTURE
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = employee.id;
        row.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = employee.name;
        row.appendChild(nameCell);

        const extensionCell = document.createElement('td');
        extensionCell.textContent = employee.extension;
        row.appendChild(extensionCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = employee.email;
        row.appendChild(emailCell);

        const departmentCell = document.createElement('td');
        departmentCell.textContent = employee.department;
        row.appendChild(departmentCell);

        const deleteCell = document.createElement('td');
        let deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('X'));
        deleteCell.appendChild(deleteBtn);
        row.appendChild(deleteCell);
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

        newTbody.appendChild(row);
    });

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(newTbody);

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = employeesArray.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employeesArray));
}