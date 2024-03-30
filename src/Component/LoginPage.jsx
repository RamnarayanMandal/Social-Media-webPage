import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostList } from '../Store/Posts-List-Store';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {

  const {login,signUpData}=useContext(PostList);
  const navagite = useNavigate();
  
  const handleLogin=(e)=>{
    e.preventDefault();
    const emailAddress = e.target.email.value; 
    const password = e.target.password.value;
    login(emailAddress, password);

     console.log(emailAddress, password);
    const user = signUpData.find(
      (user) => user.emailAddress === emailAddress && user.password === password
    );
  
    if (user) {
      toast.success("Login successfully");
       navagite('/Home'); 
     
    } else {
      // Handle invalid login
      console.log("Invalid email or password");
      toast.error("Invalid email or password.");
    }
  }

  return (
    <>
    <div className='  flex justify-center content-center'>
      <div className="flex flex-col lg:flex-row border-solid rounded mt-32 w-9/12">
        <div className="w-full lg:p-10 border rounded-s overflow-hidden lg:bg-slate-50 bg-white ">
          <div className="sm:max-w-sm mx-auto pt-40">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in for your account
            </h2>
          </div>

          <div className="mt-20">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center mb-4 sm:mb-0">
                <input
                  className="form-checkbox rounded h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  type="checkbox"
                  id="form2Example33"
                  checked
                />
                <label className="ml-2 block text-sm text-gray-900" htmlFor="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 p-4"
                >
                  Log in
                </button>
              </div>
              <ToastContainer
            position="top-center"
            pauseOnHover
            theme="colored" 
            />
            </form>
          </div>
        </div>
        <div className="w-full hidden md:hidden lg:grid">
          <img
            className="h-full w-full object-contain rounded-e"
            src="https://cdn.pixabay.com/photo/2019/03/26/18/01/reading-4083288_960_720.jpg"
            alt=""
          />
        </div>
      </div>
      </div>
    </>
  );
}
