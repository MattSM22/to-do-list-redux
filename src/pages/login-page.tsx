import { FaGoogle, FaGithub } from "react-icons/fa"

const iconsProps = {
  color: "white",
  size: 16
}

export function Login(){
  return (
    <div className="w-1/2 h-5/6 flex flex-col items-center justify-center gap-3 bg-slate-900 rounded-md">
      <h3 className="text-slate-300">Please make a login to make your tasks</h3>
      <span className="text-slate-300">Choose an option to make a login</span>
      <form className="flex flex-col items-center justify-start gap-6 w-full">
        <input className="h-10 text-slate-200 bg-transparent outline-none border-b-2 text-sm w-3/6" type="text" placeholder="Please type your e-mail here"/>
        <input className="h-10 text-slate-200 bg-transparent outline-none border-b-2 text-sm w-3/6" type="password" placeholder="Please type your password" />
        <span className="text-slate-300">Or continue with</span>
        <div className="flex flex-row items-center justify-center gap-6">
          <button className="w-32 h-12 bg-red-500 flex flex-row items-center justify-center gap-2 text-white text-xs rounded-md hover:bg-red-600" type="button">
            <FaGoogle {...iconsProps} />
            Google
          </button>
          <button className="w-32 h-12 bg-slate-700 flex flex-row items-center justify-center gap-2 text-white text-xs rounded-md hover:bg-slate-800" type="button">
            <FaGithub {...iconsProps} />
            Github
          </button>
        </div>


        <button type="submit" className="text-white w-3/6 h-12 text-sm bg-blue-500 rounded-md hover:bg-blue-600">Log in</button>
      </form>
    </div>
  )
}