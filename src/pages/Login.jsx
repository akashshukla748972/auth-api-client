import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/slices/userSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Axios } from "../utils/axiox";
import Loader from "./Loader";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      toast.success("Request sent");
      setStatus(true);
      const response = await Axios.post("/login", userData);
      if (response.status == 200) {
        toast.success(response.data.message);
        navigate("/home");
      }
      //   toast.error("Bad request");
      setStatus(false);
      // if(response)
    } catch (error) {
      setStatus(false);
      toast.error("Bad request");
      console.log("Error", error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  if (status) {
    return <Loader />;
  }

  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="px-6 py-10 bg-blue-50 rounded-xl shadow-xl w-[300px] sm:w-[350px] md:[400px]">
        <h1 className="text-2xl font-semibold text-zinc-700 mb-5 text-center">
          Sign In User
        </h1>
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className=""></label>
            <input
              onChange={(e) => handleInput(e)}
              type="text"
              className="bg-gray-200 py-2 text-xl px-2"
              placeholder="Enter Name"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className=""></label>
            <input
              onChange={(e) => handleInput(e)}
              type="text"
              className="bg-gray-200 py-2 text-xl px-2"
              placeholder="Enter Password"
              name="password"
            />
          </div>
          <div className="flex flex-col">
            <button className="bg-orange-500 text-xl font-medium text-white py-2">
              Sign In
            </button>
          </div>
        </form>
        <div className="flex gap-2 mt-6 justify-center text-sm font-semibold text-zinc-600">
          <span className="">Don't have account</span>
          <Link className="text-orange-500" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
