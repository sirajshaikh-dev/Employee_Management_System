import { useContext } from "react"
import { AuthContext } from "../../Context/AuthProvider"

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  console.log("userData", userData);

  return (
    <div id="alltask" className="bg-gray-900 p-6 mt-6 rounded-lg shadow-lg">
      <div className="bg-red-500 mb-4 py-3 px-5 flex justify-between items-center rounded-lg text-white font-semibold">
        <h2 className="w-1/5 text-center">Name</h2>
        <h3 className="w-1/5 text-center">New Task</h3>
        <h5 className="w-1/5 text-center">Active Task</h5>
        <h5 className="w-1/5 text-center">Completed</h5>
        <h5 className="w-1/5 text-center">Failed</h5>
      </div>

      <div className="space-y-3">
        {userData.map((employee) => (
          <div
            key={employee.id}
            className="flex justify-between items-center bg-gray-800 text-white py-3 px-5 rounded-lg border border-gray-700 shadow-sm"
          >
            <h2 className="w-1/5 text-center text-blue-300 font-medium">
              {employee.firstName}
            </h2>
            <h3 className="w-1/5 text-center text-blue-400 font-medium">
              {employee.taskCounts.newTask}
            </h3>
            <h5 className="w-1/5 text-center text-yellow-400 font-medium">
              {employee.taskCounts.active}
            </h5>
            <h5 className="w-1/5 text-center text-green-400 font-medium">
              {employee.taskCounts.completed}
            </h5>
            <h5 className="w-1/5 text-center text-red-400 font-medium">
              {employee.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
