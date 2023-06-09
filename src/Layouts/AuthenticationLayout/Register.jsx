import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";

const Register = () => {
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const [togglePass, setTogglePass] = useState(false);
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/;

  const onSubmit = (data) => {
    if (!passwordRegex.test(data.password)) {
      setError("Passwords must have a special and capital Character");
      return;
    } else if (data.password.length < 6 || data.confirmpassword < 6) {
      setError("Passwords must be minimum 6 character");
      return;
    } else if (data.password !== data.confirmpassword) {
      setError("Passwords does not match");
      return;
    } else {
      setError("");

      const formData = new FormData();
      formData.append("image", data.image[0]);
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_APIKEY
      }`;
      axios.post(url, formData).then((res) => {
        const photoUrl = res.data.data.display_url;

        createUser(data.email, data.password)
          .then((res) => {
            const user = res.user;
            console.log(user);
            updateUserInfo(data.name, photoUrl)
              .then(() => {
                const saveUser = {
                  name: data.name,
                  email: data.email,
                  role: "student",
                };
                axios
                  .post(`${import.meta.env.VITE_BASE_URL}/users`, saveUser)
                  .then((res) => {
                    if (res.data.insertedId) {
                      reset();
                      toast.success("Account Successfully Created");
                      navigate(from, { replace: true });
                    }
                  });
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="w-full max-w-sm rounded-xl shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              required
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Choose Photo</span>
            </label>
            <input
              {...register("image", { required: true })}
              required
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
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
              {...register("password", { required: true })}
              required
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
              required
              {...register("confirmpassword", { required: true })}
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
          <p className="text-red-600 text-center">{error}</p>
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
        </form>
        <GoogleSignIn></GoogleSignIn>
      </div>
    </div>
  );
};

export default Register;
