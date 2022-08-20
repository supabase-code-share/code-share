import Image from 'next/image'
import facebook from '../public/facebook.svg'
import google from '../public/google.svg'
import twitter from '../public/twitter.svg'


const NewAccount = () => {
  return (
    
    <div className="flex flex-col justify-center h-screen divide-y items-center text-xl" id="create-account-form-div">
      <div className="bg-white shadow-md px-12 pt-8 pb-8 mb-4 items-center text-center rounded-xl shadow-black">
        <h1 className="mt-5 text-2xl">Create a New Account</h1>
        <div className='pt-8 flex flex-row justify-center'>
            {/* https://icons.getbootstrap.com/icons/twitter/
            https://icons.getbootstrap.com/icons/google/
            https://icons.getbootstrap.com/icons/facebook/ */}
            <a className='px-2' href=''><Image src={facebook} alt="Facebook icon" width={30} height={30} /></a>            
            <a className='px-2' href=''><Image src={twitter} alt="Twitter icon" width={30} height={30} /></a>            
            <a className='px-2' href=''><Image src={google} alt="Google icon" width={30} height={30} /></a>            
        </div>
        <form className="grid grid-cols-1 divide-y gap-10 px-5 pt-8 pb-8 mb-4">
            <input type="text" placeholder='Username' id="username" name="username" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            <input type="text" placeholder='Email Address' id="email" name="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            <input type="text" placeholder="***********" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <button type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default NewAccount
