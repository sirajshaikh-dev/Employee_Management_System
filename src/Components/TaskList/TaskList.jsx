import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({loggedInUserData}) => {
console.log('loggedInUserData',loggedInUserData);
    
  return (
    <div  id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16 text-left'>
       {loggedInUserData.tasks.map((element,index)=>{
        console.log('element',element)
        if (element.active){
            return <AcceptTask key={index} data={element}/>
        }
        if (element.newTask){
            return <NewTask key={index} data={element}/>
        }
        if (element.completed){
            return <CompletedTask key={index} data={element}/>
        }
        if (element.failed){
            return <FailedTask key={index} data={element}/>
        }
       }
       )}
    </div>
  )
}

export default TaskList