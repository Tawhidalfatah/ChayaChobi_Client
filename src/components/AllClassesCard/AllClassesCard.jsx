const AllClassesCard = ({ cls }) => {
  const { class_name, class_image, price, instructor_name, available_seats } =
    cls;
  return (
    <div className="col-span-1">
      <div className="flex flex-col gap-2 w-full">
        <img
          src={class_image}
          alt="Shoes"
          className=" object-cover 
              h-96 
              w-96"
        />

        <div className="">
          <h2 className="">{class_name}</h2>
          <p>Price: {price}</p>
          <p>Available Seats: {available_seats}</p>
          <p>Instructor:{instructor_name}</p>
        </div>
      </div>
      <button className="btn btn-primary">Add Class</button>
    </div>
  );
};

export default AllClassesCard;
