import { LockClosedIcon } from "@heroicons/react/solid";
import logohbo from "../img/hbo-black-logo.png";
import backgroundregister from "../img/background-signup.jpg";

const Register = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${backgroundregister})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-md w-full space-y-8 shadow rounded-md"
        style={{ backgroundColor: "white" }}
      >
        <div>
          <img
            className="mx-auto h-24 w-auto mt-5"
            src={logohbo}
            alt="Workflow"
          />
          <p className="text-center text-lg md:text-2xl font-bold text-gray-900">
            Sign in to your account
          </p>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="/"
              className="font-medium text-black hover:text-yellow-500"
            >
              register here
            </a>
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md -space-y-px mx-8">
            <div className="my-3">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                placeholder="Username"
              />
              <p className="text-xs italic shadow-none px-3 py-2">
                Please fill out this field.
              </p>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <p className="text-xs italic shadow-none px-3 py-2">
                Please fill out this field.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between mx-8">
            <div className="flex items-center pr-5">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 text-xs text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm pt-3">
              <a
                href="/"
                className="font-medium text-xs text-black hover:text-yellow-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="group my-5 py-2 px-4 rounded-md inline-flex items-center border border-transparent text-white bg-black hover:bg-white hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <LockClosedIcon
                className="h-5 w-5 text-white group-hover:text-black mr-3"
                aria-hidden="true"
              />
              <span>Sign in</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
