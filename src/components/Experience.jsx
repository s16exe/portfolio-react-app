import "../App.css";

export default function Experience({ role, company, duration, children }) {
  return (
    <div className=" my-5 font-medium text-[16px] ">
      <div className="w-full  grid grid-cols-4 mb-2">
        <div className="  col-span-4 xxs:col-span-3 text-left">
          → {role} <br />
          <i className="ml-3">@{company}</i>
        </div>
        <div className=" col-span-4 xxs:col-span-1 ml-3.5 text-[15px] w-[160px] text-left">
          {duration}
        </div>
      </div>
      {children}
    </div>
  );
}
