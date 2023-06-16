import SelectedClassRow from "../../components/SelectedClassRow/SelectedClassRow";
import useSelectedClasses from "../../hooks/useSelectedClasses";

const SelectedClasses = () => {
  const [selectedClasses] = useSelectedClasses();

  return (
    <div>
      <h2>selected classes :{selectedClasses?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class Info</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((cls) => (
              <SelectedClassRow
                key={cls._id}
                selectedClass={cls}
              ></SelectedClassRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
