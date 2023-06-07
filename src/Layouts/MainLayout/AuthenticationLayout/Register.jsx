import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered"
            />
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
