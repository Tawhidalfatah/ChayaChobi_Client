import { useState } from "react";
import { BsEye, BsEyeSlash, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  const [togglePass, setTogglePass] = useState(false);
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const handleSubmit = () => {
    console.log("yahaalo");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="w-full max-w-sm rounded-xl shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={togglePass ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
            />
            {togglePass ? (
              <span
                className="cursor-pointer absolute bottom-4 right-5"
                onClick={() => setTogglePass(!togglePass)}
              >
                <BsEyeSlash />
              </span>
            ) : (
              <span
                className="cursor-pointer absolute bottom-4 right-5"
                onClick={() => setTogglePass(!togglePass)}
              >
                <BsEye />
              </span>
            )}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type={toggleConfirm ? "text" : "password"}
              placeholder="confirm password"
              className="input input-bordered"
            />
            {toggleConfirm ? (
              <span
                className="cursor-pointer absolute bottom-4 right-5"
                onClick={() => setToggleConfirm(!toggleConfirm)}
              >
                <BsEyeSlash />
              </span>
            ) : (
              <span
                className="cursor-pointer absolute bottom-4 right-5"
                onClick={() => setToggleConfirm(!toggleConfirm)}
              >
                <BsEye />
              </span>
            )}
          </div>
          <Link className="hover:underline text-center py-2" to="/login">
            Already have an account? Login!!
          </Link>
          <div className="form-control mt-4">
            <input
              type="submit"
              value="Register"
              className="btn btn-primary btn-outline text-xl"
            ></input>
          </div>
          <div className="form-control mt-2">
            <button className="btn text-xl">
              Sign in with Google
              <BsGoogle size={28} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
