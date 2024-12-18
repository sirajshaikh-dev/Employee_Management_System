import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({loggedInUserData}) => {
    console.log(loggedInUserData);
    
  return (
    <div  id='tasklist' className='h-[55%] overflow-x-auto scrollbar-hide flex items-center justify-start gap-5 w-full py-5 mt-10 text-left'>
       {loggedInUserData.tasks.map((el,index)=>{
        console.log(el)
        if (el.status.active){
            return <AcceptTask key={index}/>
        }
        if (el.status.newTask){
            return <NewTask key={index}/>
        }
        if (el.status.completed){
            return <CompletedTask key={index}/>
        }
        if (el.status.failed){
            return <FailedTask key={index}/>
        }
       }
       )}
    </div>
  )
}

export default TaskList