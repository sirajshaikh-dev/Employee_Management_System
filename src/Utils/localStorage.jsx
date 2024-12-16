
const employees = [
  {
    "id": 1,
    "firstName": "Hitesh",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Complete the project documentation.",
        "date": "2024-12-12",
        "category": "Documentation",
        "status": {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      },
      {
        "title": "Task 2",
        "description": "Review the code changes.",
        "date": "2024-12-11",
        "category": "Code Review",
        "status": {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      },
      {
        "title": "Task 3",
        "description": "Fix the reported bugs.",
        "date": "2024-12-10",
        "category": "Bug Fixing",
        "status": {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      }
    ],
    "taskCounts": {
      "active": 4,
      "newTask": 2,
      "completed": 5,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Siraj",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Prepare a presentation for the client.",
        "date": "2024-12-15",
        "category": "Presentation",
        "status": {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      },
      {
        "title": "Task 2",
        "description": "Organize team meeting.",
        "date": "2024-12-13",
        "category": "Meetings",
        "status": {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 4,
      "completed": 5,
      "failed": 2
    }
  },
  {
    "id": 3,
    "firstName": "Sarthak",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Submit the monthly report.",
        "date": "2024-12-14",
        "category": "Reporting",
        "status": {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      },
      {
        "title": "Task 2",
        "description": "Assist in onboarding a new hire.",
        "date": "2024-12-12",
        "category": "Onboarding",
        "status": {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      },
      {
        "title": "Task 3",
        "description": "Test the new feature implementation.",
        "date": "2024-12-10",
        "category": "Testing",
        "status": {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      },
      {
        "title": "Task 4",
        "description": "Prepare a training session.",
        "date": "2024-12-20",
        "category": "Training",
        "status": {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      }
    ],
    "taskCounts": {
      "active": 5,
      "newTask": 3,
      "completed": 4,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Anirudh",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Analyze market trends.",
        "date": "2024-12-18",
        "category": "Analysis",
        "status": {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      },
      {
        "title": "Task 2",
        "description": "Create a budget proposal.",
        "date": "2024-12-16",
        "category": "Budgeting",
        "status": {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 3,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Anjum",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Audit financial records.",
        "date": "2024-12-14",
        "category": "Audit",
        "status": {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      },
      {
        "title": "Task 2",
        "description": "Coordinate with external vendors.",
        "date": "2024-12-10",
        "category": "Coordination",
        "status": {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      },
      {
        "title": "Task 3",
        "description": "Update company policies.",
        "date": "2024-12-11",
        "category": "Policy",
        "status": {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "completed": 5,
      "failed": 0
    }
  }
];

  const admin =[ {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

  console.log(employees)
  employees.forEach((employee)=>{
    console.log(`TaskCount:`,employee.taskCounts)
  })

  export const setLocalStorage= ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage= ()=>{
    const employees= JSON.parse(localStorage.getItem('employees') )
    const admin = JSON.parse((localStorage.getItem('admin')))
    // console.log(employees,admin)
    return{employees,admin}
  }

  /*Just Practice: Adding taskCount type dynamically in Employee array */
  // employees.forEach((employee) => {
  //   const taskCounts = { active: 0, newTask: 0, completed: 0, failed: 0 };
  
  //   employee.tasks.forEach((task) => {
  //     Object.entries(task.status).forEach(([key, value]) => { 
  //       //Object.entries(task.status) converts the status object into an array of key-value pairs.        
  //       if (value) {
  //         taskCounts[key]++;
  //       }
  //     });
  //   });
  
  //   employee.taskCounts = taskCounts; // Add taskCounts to the employee object
  //   console.log(`Name:${employee.firstName}, id: ${employee.id}, counts:`,taskCounts)
  // });
  // console.log(employees);
