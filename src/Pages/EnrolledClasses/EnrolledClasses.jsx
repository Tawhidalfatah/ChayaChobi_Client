import EnrolledClassesRow from "../../components/EnrolledClassesRow/EnrolledClassesRow";
import useEnrolledClasses from "../../hooks/useEnrolledClasses";

const EnrolledClasses = () => {
  const [enrolledClasses] = useEnrolledClasses();
  return (
    <div>
      <h2>Enrolled Classes :{enrolledClasses?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class Info</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((cls, index) => (
              <EnrolledClassesRow
                key={cls._id}
                cls={cls}
                index={index}
              ></EnrolledClassesRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
