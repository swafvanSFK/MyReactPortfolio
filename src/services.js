import Vector1  from "../src/Assets/services/Vector-1.svg";
import projects from "../src/Assets/services/projects.svg";
import vector2 from "../src/Assets/services/Vector-2.svg";
import stack from "../src/Assets/services/stack.svg";
import vector5 from "../src/Assets/services/Vector-5.svg";
import displayFill from "../src/Assets/services/display-fill.svg";
import vector3 from "../src/Assets/services/Vector-3.svg";
import history from "../src/Assets/services/clock-history.svg";
import vector6 from "../src/Assets/services/Vector-6.svg";
import gem from "../src/Assets/services/gem.svg";
import vector4 from "../src/Assets/services/Vector-4.svg";
import earmark from "../src/Assets/services/file-earmark-text.svg";

const services = [
  {
    label: "Web Development",
    description:
      "From responsive design to interactive features, I have the skills to bring your web project to life",
    vector: Vector1,
    image: projects,
  },
  {
    label: "Responsive Design",
    description:
      "I ensure that your website or application is fully responsive",
    vector:  vector2 ,
    image:  stack ,
  },
  {
    label: "Software Development",
    description:
      "I can design, develop, and maintain software applications for diverse platforms.",
    vector:  vector5 ,
    image:  displayFill ,
  },
  {
    label: "Back-End Development",
    description:
      "I am responsible to ensuring your web applications run smoothly and securely",
    vector: vector3 ,
    image: history,
  },
  {
    label: "front-end design",
    description:
      "I excel in front-end web design, crafting visually appealing and user-friendly interfaces.",
    vector: vector6,
    image: gem,
  },
  {
    label: "Database Design and Management",
    description:
      "I design and maintain databases, secure, and accessible when you need it.",
    vector: vector4,
    image: earmark,
  },
];

export default services;
