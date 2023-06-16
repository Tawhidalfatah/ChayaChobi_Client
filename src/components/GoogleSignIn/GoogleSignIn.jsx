import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const GoogleSignIn = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      const user = res.user;
      const saveUser = {
        name: user.displayName,
        email: user.email,
        role: "student",
      };
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/users`, saveUser)
        .then((res) => {
          if (res.data.insertedId) {
            navigate(from, { replace: true });
          }
          navigate(from, { replace: true });
        });
      toast.success("Signed in successfully");
    });
  };
  return (
    <>
      <div className="form-control">
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-blue-700 m-3 text-white text-xl"
        >
          Sign in with Google
          <BsGoogle size={28} />
        </button>
      </div>
    </>
  );
};

export default GoogleSignIn;
