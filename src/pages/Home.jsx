import "../App.css";
import Experience from "../components/Experience";
import myImage from "../assets/linkedin-profile-photo.jpg";

export default function Home() {
  const eruna = {
    role: "Junior Software Developer",
    company: "Eruna Technologies India",
    duration: "Sep 2024 - Feb 2025",
  };

  const simons = {
    role: "Android Developer Intern",
    company: "Simons System LLP",
    duration: "Jan 2024 - Mar 2024",
  };

  return (
    <div>
      <img
        src={myImage}
        alt="profile-photo"
        className="rounded-full h-60 mb-10"
      />
      <h1 className="h-12 text-3xl font-medium ">K S Subramanya Char</h1>
      <p className="my-3">
        Hello!! I'm a final year student at{" "}
        <i className="font-medium">Atria Institute of Technology</i>, majoring
        in Computer Science. I am passionate about tech. I love to tinker around
        and develop cool things :)
      </p>
      <p>
        I am looking forward to opportunities where I can contribute
        meaningfully to projects, collaborate with experienced professionals,
        and continue growing my skills as a software engineer.
      </p>
      <h3 className="mt-5 mb-3 text-xl font-bold underline underline-offset-8">
        Internship Experience
      </h3>

      <Experience {...eruna}>
        <ul className="list-disc ml-3.5 italic font-normal">
          <li className="text-[14px] mt-2 ">
            {" "}
            Developed a face recognition system using open source models,
            integrating it into the Eruna Technologies production Android app.
          </li>
          <li>
            Implemented Preprocessing Pipeline for face recognition models in
            Java, optimizing model input for better accuracy and performance.
          </li>
          <li>
            Gained Proficiency in Python for working with machine learning
            models and understanding deep learning concepts.
          </li>
          <li>
            Processed and Transformed Excel Data using Python, converting files
            into required formats for database uploads, enhancing data
            management efficiency.
          </li>
        </ul>
      </Experience>

      <Experience {...simons}>
        <ul className="list-disc ml-3.5 italic font-normal">
          <li className="mt-2 ">
            Developed Frontend UI for a weather monitoring Android app using
            Jetpack Compose, improving user experience and interface design.
          </li>
          <li>
            Gained Exposure to IoT-Integrated Applications, working with data
            from IoT devices that monitor environmental pollutants and weather
            conditions.
          </li>
          <li>
            Enhanced Android Development Skills by contributing to app features,
            UI components, and seamless data integration from the backend.
          </li>
        </ul>
      </Experience>
    </div>
  );
}
