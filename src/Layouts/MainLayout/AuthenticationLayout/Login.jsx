import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="w-full max-w-sm rounded-xl shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <Link className="hover:underline text-center py-2" to="/register">
            New to ChayaChobi? Register now!!
          </Link>
          <div className="form-control mt-4">
            <button className="btn btn-primary btn-outline text-xl">
              Login
            </button>
          </div>
          <div className="form-control mt-2">
            <button className="btn text-xl">
              Sign in with Google
              <BsGoogle size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
