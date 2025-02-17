import "../App.css";

const ProjectsComp = ({ name, stack, children }) => {
  return (
    <div className=" my-5 font-medium text-[16px] ">
      <div className="w-full flex justify-between mb-2">
        <p className=" text-xl">
          → {name} <br />
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
