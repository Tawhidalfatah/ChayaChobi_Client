const AllInstructorCard = ({ instructorDetails }) => {
  const { name, photo, email } = instructorDetails;
  return (
    <div className="col-span-1 card w-56 md:w-96 bg-base-100 shadow-xl ">
      <div className="flex flex-col gap-2 w-full">
        <img
          src={photo}
          alt="Shoes"
          className="object-cover h-56 w-56 md:h-96 md:w-96 rounded-xl"
        />

        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p className="">Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default AllInstructorCard;
