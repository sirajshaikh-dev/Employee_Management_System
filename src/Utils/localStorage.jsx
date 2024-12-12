
  const employees =  [
    {
      "id": 1,
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
      ]
    },
    {
      "id": 2,
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
      ]
    },
    {
      "id": 3,
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
      ]
    },
    {
      "id": 4,
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
      ]
    },
    {
      "id": 5,
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
      ]
    }
  ]

  const admin =[ {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

  export const setLocalStorage= ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage= ()=>{
    const employees= JSON.parse(localStorage.getItem('employees') )
    const admin = JSON.parse((localStorage.getItem('admin')))
    console.log(employees,admin)
  }