import { useState } from "react";

import useManageClasses from "../../hooks/useManageClasses";
import FeedbackModal from "../../components/FeedbackModal/FeedbackModal";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ManageClassesRow from "../../components/ManageClassesRow/ManageClassesRow";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [allclasses] = useManageClasses();
  const [showModal, setShowModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  const handleSendFeedback = (selectedClass) => {
    setSelectedRow(selectedClass);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFeedbackText("");
  };

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleSend = () => {
    // Perform PATCH request with feedbackText
    console.log(selectedRow.class_name);
    console.log(feedbackText);
    const feedbackData = {
      feedback: feedbackText,
    };
    axiosSecure
      .patch(`/classes/feedback/${selectedRow._id}`, feedbackData)
      .then((res) => console.log(res.data));
    // After successful response, close the modal and reset the feedbackText
    handleModalClose();
  };

  return (
    <>
      <div>
        <h2>Manage Classes :{allclasses?.length}</h2>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th className="text-center">Class</th>
                <th>Instrutor</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allclasses?.map((cls, index) => (
                <ManageClassesRow
                  key={cls._id}
                  cls={cls}
                  index={index}
                  handleSendFeedback={handleSendFeedback}
                ></ManageClassesRow>
              ))}
            </tbody>
            {showModal && (
              <FeedbackModal onClose={handleModalClose}>
                <div className="flex flex-col mt-10 gap-5 items-center">
                  <div>
                    <h2>Class Name: {selectedRow?.class_name}</h2>

                    <p>Instructor: {selectedRow?.instructor_name}</p>
                  </div>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    value={feedbackText}
                    onChange={handleFeedbackChange}
                    placeholder="Write your feedback..."
                  />
                  <button className="btn btn-primary" onClick={handleSend}>
                    Send Feedback
                  </button>
                </div>
              </FeedbackModal>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageClasses;
