const MyProjects = () => {
  return (
    <div
      className={`grid grid-cols-[repeat(3,300px)] grid-rows-[repeat(3,full)] relative w-full h-[200vh] items-center justify-center`}
    >
      <div className="flex items-center justify-center">
        <div className="w-[150px] h-[50vh] bg-red-500">
          <h1>Project1</h1>
        </div>
      </div>
      <div className="">
        <h1>Project 2</h1>
      </div>
      <div className="">
        <h1>Project 3</h1>
      </div>
      <div className="">
        <h1>Project 4</h1>
      </div>
      <div className="">
        <h1>Project 5</h1>
      </div>
      <div className="">
        <h1>Project 6</h1>
      </div>
   

    </div>
  );
};

export default MyProjects;
