import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.class_image[0]);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_APIKEY
    }`;
    axios.post(url, formData).then((res) => {
      const class_image = res.data.data.display_url;

      data.available_seats = parseFloat(data.available_seats);
      data.price = parseFloat(data.price);
      data.class_image = class_image;
      data.enrolled_students_quantity = 0;
      data.status = "pending";
      axiosSecure
        .post("/addclass", data)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Class added successfully");
          }
        })
        .catch((err) => console.log(err));
    });
  };
  console.log(errors);
  return (
    <div className="w-full">
      <h1 className="text-center text-5xl my-10">Add a Class</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-3"
      >
        <div className="flex gap-5">
          <input
            {...register("instructor_name", { required: true })}
            defaultValue={user?.displayName}
            className="input input-bordered w-full max-w-xs "
            type="text"
            placeholder="Instructor Name"
            readOnly
          />
          <input
            {...register("instructor_email", { required: true })}
            defaultValue={user?.email}
            className="input input-bordered w-full max-w-xs"
            type="email"
            placeholder="Instructor Email"
            readOnly
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            {...register("class_name", { required: true })}
            className="w-full input input-bordered max-w-xs"
            type="text"
            placeholder="Class Name"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            {...register("class_image", { required: true })}
            className="w-full file-input file-input-bordered max-w-xs"
            type="file"
            placeholder="Class Image"
            required
          />
        </div>
        <div className="flex gap-5">
          <div>
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              {...register("available_seats", { required: true, min: 1 })}
              className="input input-bordered w-full max-w-xs"
              type="number"
              placeholder="Available Seats"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: true, min: 1 })}
              className="input input-bordered w-full max-w-xs"
              type="number"
              placeholder="Price"
              required
            />
          </div>
        </div>
        <input className="btn btn-accent" type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddClass;
