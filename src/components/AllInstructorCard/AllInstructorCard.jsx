const AllInstructorCard = ({ instructorDetails }) => {
  const { name, photo, email } = instructorDetails;
  return (
    <div className="col-span-1">
      <div className="flex flex-col gap-2 w-full">
        <img
          src={photo}
          alt="Shoes"
          className=" object-cover 
              h-96 
              w-96"
        />

        <div className="">
          <h2 className="">{name}</h2>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default AllInstructorCard;
