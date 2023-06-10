import { useState } from "react";

import useManageClasses from "../../hooks/useManageClasses";
import FeedbackModal from "../../components/FeedbackModal/FeedbackModal";

const ManageClasses = () => {
  const [allclasses] = useManageClasses();
  const [showModal, setShowModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  const handleSendFeedback = (row) => {
    setSelectedRow(row);
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
    // Perform PATCH request with feedbackText and selectedRow
    // Send feedbackText to the server for the selected row data
    // Update the server with the feedback using the PATCH method
    console.log(feedbackText);
    console.log(selectedRow);
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
                <tr key={cls._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={cls.class_image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>

                      <div className="font-bold">{cls.class_name}</div>
                    </div>
                  </td>
                  <td>
                    {cls.instructor_name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {cls.instructor_email}
                    </span>
                  </td>
                  <td>{cls.available_seats}</td>
                  <td>{cls.price}</td>
                  <td>{cls.status}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Approve</button>
                    <button className="btn btn-ghost btn-xs">Deny</button>
                    <button
                      onClick={() => handleSendFeedback(cls.instructor_email)}
                      className="btn btn-ghost btn-xs"
                    >
                      Send Feedback
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {showModal && (
              <FeedbackModal onClose={handleModalClose}>
                <textarea
                  value={feedbackText}
                  onChange={handleFeedbackChange}
                  placeholder="Write your feedback..."
                />
                <button onClick={handleSend}>Send</button>
              </FeedbackModal>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageClasses;
