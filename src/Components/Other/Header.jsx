
const Header = ({changeUser}) => {
  const logOut= ()=>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()  //In efficient way as it reload the page
    changeUser('')
  }

  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium text-left flex flex-col'>
            Hello
            <span className='text-3xl font-semibold'>{'username'} 👋</span>
        </h1>
        <button onClick={logOut}
        className='bg-red-600 text-lg font-medium text-white px-3 py-1 sm:px-5 sm:py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header
