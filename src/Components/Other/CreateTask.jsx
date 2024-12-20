import { useState } from "react"

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  
  const submitHandler=(e)=>{
    e.preventDefault()
    // console.log(taskTitle,taskDate,assignTo,category,taskDescription)
  
//Basic Validation
  if (!taskTitle || !taskDate || !assignTo) {
      alert('Please fill in all required fields')
      return
  }

// Constructing the task Object
    const task ={
      newTask:true,
      active:false,
      failed:false,
      completed:false,
      taskTitle,
      taskDescription,
      taskDate,
      category,
    }

// Get employees data from localStorage
    const data= JSON.parse(localStorage.getItem('employees'))
    // console.log('Data',data)

// Find the employee by firstName
    data.forEach((element)=>{
    // console.log('Element',element)

      if (assignTo === element.firstName) {
        element.tasks.push(task)
      console.log('task created',element)
      console.log('task',task)
// Save updated data back to localStorage    
      localStorage.setItem('employees',JSON.stringify(data))
      }
    })

// Reset form fields after submission
    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
  <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
      <div className='w-1/2 text-left'>
        <InputField 
          label="Task Title" 
          value={taskTitle} 
          onChange={(e) => setTaskTitle(e.target.value)} 
          placeholder="Make a UI design"
        />
        <InputField 
          label="Date" 
          type="date" 
          value={taskDate} 
          onChange={(e) => setTaskDate(e.target.value)} 
        />
        <InputField 
          label="Assign to" 
          value={assignTo} 
          onChange={(e) => setAssignTo(e.target.value)} 
          placeholder="Employee name"
        />
        <InputField 
          label="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          placeholder="Design, dev, etc."
        />
      </div>

      <div className='w-2/5 flex flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        <textarea 
          name="" id="" cols='30' rows='10' 
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)} 
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
