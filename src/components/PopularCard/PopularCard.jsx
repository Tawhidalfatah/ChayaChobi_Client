const PopularCard = ({ classinfo }) => {
  const { class_name, class_image } = classinfo;
  console.log(classinfo);
  return (
    <div className="col-span-1 card  w-96 bg-base-100 shadow-xl ">
      <div className="flex flex-col gap-2 w-full overflow-hidden">
        <img
          src={class_image}
          alt="Shoes"
          className=" object-cover 
              h-96 
    
  w-96 transition rounded-xl"
        />

        <div className="card-body text-center">
          <h2 className="card-title">{class_name}</h2>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
