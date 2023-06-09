import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [toggleReveal, setToggleReveal] = useState(false);
  const { register, handleSubmit } = useForm();
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/;

  const onSubmit = (data) => {
    if (!passwordRegex.test(data.password)) {
      setError("Password must have a special and capital Character");
      return;
    } else if (data.password.length < 6) {
      setError("Password must be minimum 6 character");
      return;
    } else {
      signIn(data.email, data.password)
        .then((res) => {
          console.log(res.user);
          navigate(from, { replace: true });
        })
        .catch((err) => {
          console.log(err);
          console.log(data.email, data.password);
        });

      setError("");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="w-full max-w-sm rounded-xl shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              required
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
              {...register("password", {
                required: true,
              })}
              type={toggleReveal ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
            />
            {toggleReveal ? (
              <span
                className="cursor-pointer absolute bottom-4 right-5"
                onClick={() => setToggleReveal(!toggleReveal)}
              >
                <BsEyeSlash />
              </span>
            ) : (
              <span
                className="cursor-pointer absolute bottom-4 right-5"
                onClick={() => setToggleReveal(!toggleReveal)}
              >
                <BsEye />
              </span>
            )}
            <p className="text-red-600 text-center">{error}</p>
          </div>
          <Link className="hover:underline text-center py-2" to="/register">
            New to ChayaChobi? Register now!!
          </Link>
          <div className="form-control mt-4">
            <input
              value="Login"
              type="submit"
              className="btn btn-primary btn-outline text-xl"
            />
          </div>
        </form>
        <GoogleSignIn></GoogleSignIn>
      </div>
    </div>
  );
};

export default Login;
