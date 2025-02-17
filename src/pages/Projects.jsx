import "../App.css";
import ProjectsComp from "../components/ProjectsComp";

export default function Projects() {
  const faceStack = [
    "Core Java",
    "OpenCV for Java",
    "ONNX Runtime",
    "ONNX Model (w600k_r50)",
  ];

  const animalStack = [
    "Python",
    "TensorFlow",
    "CNN (Convolutional Neural Networks)",
    "OpenCV",
    "Streamlit",
  ];

  const unilinkStack = [
    "React JS",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
    "Apache Tomcat",
  ];

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold underline underline-offset-8">
        Projects
      </h1>
      <ProjectsComp stack={faceStack} name="Face Recognition in Java">
        <ul className="list-disc ml-3.5 italic font-normal">
          <li className="mt-2 ">
            Developed a Face Recognition System in Java, utilizing OpenCV for
            face detection, alignment, and preprocessing to enhance / improve
            model accuracy
          </li>
          <li>
            Integrated ONNX Runtime with the w600k\_r50 model to generate facial
            embeddings, enabling both real-time identity verification against
            stored embeddings and direct face-to-face image comparison for
            authentication.
          </li>
        </ul>
      </ProjectsComp>

      <ProjectsComp name="Animal Classification using CNN" stack={animalStack}>
        <ul className="list-disc ml-3.5 italic font-normal">
          <li className="mt-2 ">
            Built an Animal Classification System using CNNs in TensorFlow,
            training a deep learning model to classify multiple animal species
            based on image data.
          </li>
        </ul>
      </ProjectsComp>

      <ProjectsComp
        name="Unilink -- Project Collaboration across Universities"
        stack={unilinkStack}
      >
        <ul className="list-disc ml-3.5 italic font-normal">
          <li className="mt-2 ">
            An integrated platform for project collaboration that offers a
            single space for students to create, host, and manage projects,
            while exploring and joining opportunities aligned with their skills
            and interests, simplifying access and enhancing engagement
          </li>
        </ul>
      </ProjectsComp>
    </div>
  );
}
