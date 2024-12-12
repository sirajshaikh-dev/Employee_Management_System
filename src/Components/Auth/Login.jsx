import  { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler =(e)=>{
        e.preventDefault()
        console.log(`Email:${email}`)
        console.log(`Password: ${password}`)
        setEmail('')
        setPassword('')
     }

  return (
    <div className='flex h-screen w-full items-center justify-center '>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={submitHandler}
            className='flex flex-col items-center justify-center'>
                <input type="email" required
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                value={email}
                className=' outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full 
                placeholder:text-blue-300'
                 placeholder='Enter Your Email'/>
                
                <input type="password" required
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                value={password}
                className=' outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full 
                placeholder:text-blue-300 mt-3'
                placeholder='Enter Your Password' />
                
                <button className='text-white outline-none  border-none bg-emerald-600 py-4 px-5 text-xl rounded-full 
                placeholder:text-blue-100 mt-5'
                >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login