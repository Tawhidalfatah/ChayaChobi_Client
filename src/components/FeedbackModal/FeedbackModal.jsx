const FeedbackModal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
      <div className="relative bg-white w-1/2 rounded-lg p-4">
        {children}
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default FeedbackModal;
