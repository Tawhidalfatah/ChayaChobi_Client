const PopularCard = ({ classinfo }) => {
  const { class_name, class_image, enrolled_students_quantity, price } =
    classinfo;
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
          <p>Enrolled: {enrolled_students_quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
