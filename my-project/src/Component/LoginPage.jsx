import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage({ login }) {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row border-solid border-slate-900 border-2 mx-auto max-w-7xl rounded gap-10">
        <div className="w-full sm:w-1/2  p-20 lg:mt-20">
          <div className="sm:max-w-sm mx-auto">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in for your account
            </h2>
          </div>

          <div className="mt-20">
            <form className="space-y-6" onSubmit={login}>
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
        <div className="w-full sm:w-1/2 border-solid border-slate-900 border-2">
          <img
            className="w-full h-auto"
            src="https://cdn.pixabay.com/photo/2019/03/26/18/01/reading-4083288_960_720.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
