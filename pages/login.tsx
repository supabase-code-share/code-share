import Image from 'next/image'
import personPic from '../public/person-circle.svg'

const Login = () => {
  return (
    
    <div className="flex flex-col justify-center h-screen divide-y items-center text-xl" id="login-form-div">
      <div className="bg-white shadow-md px-12 pt-8 pb-8 mb-4 items-center text-center rounded-xl shadow-black">
      {/* Image source: https://icons.getbootstrap.com/icons/person-circle/ */}
      <div id='person-pic-div'>
        <Image src={personPic} alt="Picture of a head" className='' width={100} height={100} id="person-pic"/>
      </div>
        <h1 className="mt-5 text-2xl">Login</h1>
        <form className="grid grid-cols-1 divide-y gap-10 px-5 pt-8 pb-8 mb-4">
            <input type="text" placeholder='Email Address' id="username" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            <input type="text" placeholder="Password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <button type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
        </form>
        <p className='text-sm'>Don’t have an account? Sign Up</p>
      </div>
    </div>
  )
}

export default Login
