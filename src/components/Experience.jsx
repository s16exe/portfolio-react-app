import "../App.css";

export default function Experience({ role, company, duration, children }) {
  return (
    <div className=" my-5 font-medium text-[16px] ">
      <div className="w-full flex justify-between mb-2">
        <p className="w-[70%]">
          → {role} <br />
          <i className="ml-3">@{company}</i>
        </p>
        <p className="text-[15px] w-[160px]"> {duration}</p>
      </div>
      {children}
    </div>
  );
}
