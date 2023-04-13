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
let form = document.querySelector('#addForm');
let empTable = document.querySelector('#empTable');
let empCount = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id            = document.querySelector('#id').value;
    let name          = document.querySelector('#name').value;
    let extension     = document.querySelector('#extension').value;
    let email         = document.querySelector('#email').value;
    let department    = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = {
        id: parseInt(id),
        name: name,
        extension: parseInt(extension),
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
            let row = e.target.parentNode.parentNode;
            let rowIndex = row.rowIndex - 1;

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex, 1);

            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(empArray) {
    empArray = empArray || employees;

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    let tbody = empTable.querySelector('tbody');
    tbody.remove();

    // REBUILD THE TBODY FROM SCRATCH
    let newTbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    empArray.forEach((employee, index) => {

        // REBUILDING THE ROW STRUCTURE
        let row = document.createElement('tr');

        let idCell = document.createElement('td');
        idCell.textContent = employee.id;
        row.appendChild(idCell);

        let nameCell = document.createElement('td');
        nameCell.textContent = employee.name;
        row.appendChild(nameCell);

        let extensionCell = document.createElement('td');
        extensionCell.textContent = employee.extension;
        row.appendChild(extensionCell);

        let emailCell = document.createElement('td');
        emailCell.textContent = employee.email;
        row.appendChild(emailCell);

        let departmentCell = document.createElement('td');
        departmentCell.textContent = employee.department;
        row.appendChild(departmentCell);

        let deleteCell = document.createElement('td');
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
    empCount.textContent = empArray.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(empArray));
}