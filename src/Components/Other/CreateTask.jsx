import {  useContext, useState } from "react"
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {

  const[userData,setUserData]= useContext(AuthContext)
  // console.log('UserData',userData)
  const [task, setTask] = useState({
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: '',
    taskDescription: '',
    taskDate: '',
    category: '',
    assignTo: ''
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitted Tasks', task.taskTitle, task.taskDate, task.assignTo, task.category, task.taskDescription);

    // Basic Validation
    if (!task.taskTitle || !task.taskDate || !task.assignTo) {
      alert('Please fill in all required fields');
      return;
    }

    const updatedEmployees = userData.map((employee) => {
      if (task.assignTo === employee.firstName) {
      //update the tasks and taskcounts immutably
        const updatedTasks = [...employee.tasks, task];
        const updatedTaskCounts = { 
          ...employee.taskCounts, 
          newTask: employee.taskCounts.newTask + 1 
        };
         // Return a new employee object with updated tasks and taskCounts
        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: updatedTaskCounts,
        };
      }
       // Return the employee unchanged if not assigned the task
      return employee;
    });
    
    setUserData(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    console.log('updatedEmployees',updatedEmployees)    


    // Reset form fields after submission
    setTask({
      taskTitle: '',
      taskDescription: '',
      taskDate: '',
      category: '',
      assignTo: ''
    });
  };

  return (
  <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
      <div className='w-1/2 text-left'>
        <InputField 
          label="Task Title" 
          value={task.taskTitle} 
          onChange={(e) => setTask({ ...task, taskTitle: e.target.value })} 
          placeholder="Make a UI design"
        />
        <InputField 
          label="Date" 
          type="date" 
          value={task.taskDate} 
          onChange={(e) => setTask({ ...task, taskDate: e.target.value })} 
        />
        <InputField 
          label="Assign to" 
          value={task.assignTo} 
          onChange={(e) => setTask({ ...task, assignTo: e.target.value })} 
          placeholder="Employee name"
        />
        <InputField 
          label="Category" 
          value={task.category} 
          onChange={(e) => setTask({ ...task, category: e.target.value })} 
          placeholder="Design, dev, etc."
        />
      </div>

      <div className='w-2/5 flex flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        <textarea 
          name="" id="" cols='30' rows='10' 
          value={task.taskDescription}
          onChange={(e) => setTask({ ...task, taskDescription: e.target.value })} 
          className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
        />
      </div>
      
      <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
    </form>
  </div>
)};

const InputField = ({ label, value, onChange, placeholder, type = 'text' }) => (
<div>
  <h3 className='text-sm text-gray-300 mb-0.5'>{label}</h3>
  <input 
    type={type} 
    value={value} 
    onChange={onChange} 
    placeholder={placeholder}
    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
  />
</div>
);

export default CreateTask;
