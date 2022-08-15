import styles from '../styles/Home.module.css'

const Login = () => {
  return (
    <div>
        <h1>Create and Account</h1>

        <div>
        <form>
            <input type="email" placeholder='Email Addres' className='block text-sm py-3 px-4 rounded-lg w-full border outline-none'/>
            <input type="password" placeholder="Password" className='block text-sm py-3 px-4 rounded-lg w-full border outline-none'/>

            <button className='py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl'>Create Account</button>

            <p className='mt-4 text-sm'>Already Have An Account? <span className='underline cursor-pointer'> Sign In</span></p>
        </form>
        </div>

    </div>
  )
}

export default Login
