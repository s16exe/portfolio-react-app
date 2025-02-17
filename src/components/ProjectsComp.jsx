import "../App.css";

const ProjectsComp = ({ name, stack, children }) => {
  return (
    <div className=" my-5 font-medium text-[16px] ">
      <div className="w-full  grid grid-cols-10 mb-2">
        <p className="col-span-9 text-xl">
          <span className="grid grid-cols-10 xxs:flex">
            <p className="col-span-1 mx-1">→</p>
            <p className="col-span-9">{name}</p>
          </span>

          {stack.map((x) => {
            return (
              <span class="mx-1 mb-1 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ">
                {x}
              </span>
            );
          })}
        </p>
        <p className="text-[15px] w-[160px]"> </p>
      </div>
      {children}
    </div>
  );
};

export default ProjectsComp;
