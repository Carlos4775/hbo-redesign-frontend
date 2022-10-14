import {
  EyeIcon,
  EyeOffIcon,
  LockClosedIcon,
  XIcon,
} from "@heroicons/react/solid";
import { React, useState } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import Cookies from "universal-cookie";
import axios from "axios";
import backgroundlogin from "../img/background-login.jpg";
import clsx from "clsx";
import logohbo from "../img/hbo-black-logo.png";
import md5 from "md5";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isUsernameEmpty, setIsUsernameEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  //Backend url
  const baseUrl = "https://localhost:44387/api/users";
  const cookies = new Cookies();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();
  const path = "home";
  const validationMessage = "Please fill out this field.";

  const redirect = () => history.push(path);

  const login = async () => {
    if (form.username === "admin" && form.password === "admin") {
      return redirect();
    }
    form.username === "" ? setIsUsernameEmpty(false) : setIsUsernameEmpty(true);
    form.password === "" ? setIsPasswordEmpty(false) : setIsPasswordEmpty(true);
    await axios
      .get(`${baseUrl}/${form.username}/${md5(form.password)}`)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          const respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("firstname", respuesta.firstname, { path: "/" });
          cookies.set("lastname", respuesta.lastname, { path: "/" });
          cookies.set("username", respuesta.username, { path: "/" });
          cookies.set("password", respuesta.password, { path: "/" });
          setTimeout(() => {
            setShowLoader(true);
            redirect();
          }, 3000);
        } else {
          setShowAlert(true);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${backgroundlogin})`,
        backgroundSize: "cover",
      }}
    >
      <img
        className="mx-auto h-36 w-auto absolute top-0 left-0 ml-10 mt-2 cursor-pointer"
        src={logohbo}
        alt="hbo logo"
        onClick={() => window.location.replace("")}
        aria-hidden="true"
      />
      <div
        className="max-w-md w-full space-y-8 shadow rounded-md"
        style={{ backgroundColor: "white" }}
      >
        <div>
          <p className="text-center text-lg md:text-2xl font-bold text-gray-900 mt-10">
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
          <div className="sweet-loading flex justify-center mt-5">
            <ClipLoader
              color="#000"
              loading={showLoader && loading}
              size={50}
            />
          </div>
          <div
            className="p-4 mx-8 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
            role="alert"
          >
            <span className="font-medium">Info!</span> Use "admin" as a username and
            password to login
          </div>
        </div>
        {/*Invalid data alert*/}
        {showAlert && (
          <div
            className="mx-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">
              Incorrect username or password
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <XIcon
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                onClick={() => setShowAlert(false)}
              />
            </span>
          </div>
        )}

        <div className="mt-8 space-y-6">
          <div className="rounded-md -space-y-px mx-8">
            <div className="my-3">
              <input
                id="username"
                name="username"
                type="text"
                required
                className={clsx(
                  "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10",
                  !isUsernameEmpty && "border-b-2 border-red-500",
                  ""
                )}
                placeholder="Username"
                onChange={handleChange}
              />
              <p
                className={clsx(
                  "text-xs text-red-600 italic shadow-none px-3 py-2",
                  isUsernameEmpty && "hidden",
                  ""
                )}
              >
                {validationMessage}
              </p>
            </div>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={isPasswordShown ? "text" : "password"}
                autoComplete="current-password"
                required
                className={clsx(
                  "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                  !isPasswordEmpty && "border-b-2 border-red-500"
                )}
                placeholder="Password"
                onChange={handleChange}
              />
              {isPasswordShown ? (
                <EyeOffIcon
                  height="20"
                  width="20"
                  className="password-icon"
                  onClick={() => setIsPasswordShown(!isPasswordShown)}
                />
              ) : (
                <EyeIcon
                  height="20"
                  width="20"
                  className="password-icon"
                  onClick={() => setIsPasswordShown(!isPasswordShown)}
                />
              )}

              <p
                className={clsx(
                  "text-xs text-red-600 italic shadow-none px-3 py-2",
                  isPasswordEmpty && "hidden",
                  ""
                )}
              >
                {validationMessage}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between mx-8">
            <div className="flex items-center pr-5">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4  border-gray-300 rounded"
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
            <button
              onClick={() => {
                login();
                setLoading(!loading);
              }}
              className="group my-5 py-2 px-4 rounded-md inline-flex items-center border border-transparent text-white bg-black hover:bg-white hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
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

export default Login;
