
const Login = () => {
  return (
    <div className="m-20 border border-sky-500 text-center">
        <form className="grid grid-cols-1 divide-y">
            <input type="email" placeholder='Email Addres' className=''/>
            <input type="password" placeholder="Password" className=''/>
            <button className=''>Login</button>
        </form>
    </div>
  )
}

export default Login