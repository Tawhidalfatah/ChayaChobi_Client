import useMyClasses from "../../hooks/useMyClasses";

const MyClasses = () => {
  const [myClasses] = useMyClasses();
  console.log(myClasses);
  return (
    <div className="overflow-x-auto w-full">
      <h2>My Classes: {myClasses.length}</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Available Seats</th>
            <th>Enrolled Students</th>
            <th>Status</th>
            <th>Admin Feedback</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myClasses.map((cls, index) => (
            <tr key={cls._id}>
              <td>{index + 1}</td>
              <td>{cls.class_name}</td>
              <td>{cls.available_seats}</td>
              <td>{cls.enrolled_students_quantity}</td>
              <td>{cls.status}</td>
              <td>{cls?.feedback && cls.feedback}</td>
              <td>
                <button className="btn btn-xs">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
