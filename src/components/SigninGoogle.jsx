
// import { signinAction } from "../_lib/action";

function SignInButton() {
  return (
    <form>
  <button className=' bg-transparent items-center gap-6 text-lg border rounded w-100  px-10 py-2 font-medium googlebtn btntext'>
    <div className="flex align-item-center justify-content-center">
      <img  
        src='https://authjs.dev/img/providers/google.svg'
        alt='Google logo'
        height='24'
        width='24'
      />
      </div>
      <span className="justify-content-start">Continue with Google</span>
    </button>
    </form>
  );
}

export default SignInButton;
