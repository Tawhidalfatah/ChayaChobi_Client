import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllClassesCard = ({ cls }) => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();
  const {
    _id,
    class_name,
    class_image,
    price,
    instructor_name,
    instructor_email,
    available_seats,
  } = cls;
  const handleAddClass = () => {
    if (!user) {
      Swal.fire({
        title: "Login First!!!",
        text: "You are not logged in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      const selectedClass = {
        class_id: _id,
        student_name: user.displayName,
        student_email: user.email,
        instructor_name,
        instructor_email,
        class_name,
        price,
        class_image,
      };
      console.log(selectedClass);
      axiosSecure.post("/selectedclasses", selectedClass).then((res) => {
        if (res.data.insertedId) {
          Swal.fire(
            "Added!",
            `${class_name} course has been added.`,
            "success"
          );
        }
      });
    }
  };
  return (
    <div className="card w-56 md:w-96 bg-base-100 shadow-xl">
      <img
        src={class_image}
        alt="Shoes"
        className=" object-cover 
              h-96 
              w-96"
      />

      <div className="card-body text-center">
        <h2 className="card-title">{class_name}</h2>
        <p>Price: ${price}</p>
        <p>Available Seats: {available_seats}</p>
        <p>Instructor: {instructor_name}</p>
      </div>

      <div className="card-actions justify-center my-5">
        <button
          disabled={isAdmin || isInstructor || available_seats === 0}
          onClick={handleAddClass}
          className="btn btn-primary"
        >
          Add Class
        </button>
      </div>
    </div>
  );
};

export default AllClassesCard;
