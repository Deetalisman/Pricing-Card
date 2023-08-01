import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
export default function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="Main">
      <Section />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Section() {
  return (
    <div className="section">
      <div className="one">
        <div className="two">
          <p>FREE</p>
        </div>
        <h1>0</h1>
        <p className="h1-next">GREAT FOR STARTERS</p>
        <p className="h1-2next">Discover how to create your first project</p>
        <div className="three">
          <p>GET STARTED</p>
        </div>
      </div>
      <div className="four">
        <p>
          {" "}
          <FaCheck className="check" />3 new project
        </p>
        <p>
          {" "}
          <FaTimes className="cancel" />
          Basic interaction
        </p>
        <p>
          <FaTimes className="cancel" />
          Assets librart
        </p>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="section">
      <div className="one">
        <div className="two lte">
          <p>LTE</p>
        </div>
        <h1>
          {" "}
          <sup>$</sup>7<sub>/mo</sub>
        </h1>
        <p className="h1-next">FOR PLANNED PROJECTS</p>
        <p className="h1-2next">
          Bring your design to the next level and export them
        </p>
        <div className="three">
          <p>GET STARTED</p>
        </div>
      </div>
      <div className="four">
        <p>
          {" "}
          <FaCheck className="check" />3 new project/month
        </p>
        <p>
          {" "}
          <FaCheck className="check" />
          Basic interaction
        </p>
        <p>
          {" "}
          <FaCheck className="check" />
          Assets librart
        </p>
      </div>
    </div>
  );
}
function Section3() {
  return (
    <div className="section">
      <div className="one">
        <div className="two pro">
          <p>PRO</p>
        </div>
        <h1>
          <sup>$</sup>
          12
          <sub>/mo</sub>
        </h1>
        <p className="h1-next">FOR PROFESSIONAL USE</p>
        <p className="h1-2next">
          Enjoy limitless use with interactive export options
        </p>
        <div className="three">
          <p>GET STARTED</p>
        </div>
      </div>
      <div className="four">
        <p>
          {" "}
          <FaCheck className="check" />3 new project/month
        </p>
        <p>
          {" "}
          <FaCheck className="check" />
          Basic interaction
        </p>
        <p>
          {" "}
          <FaCheck className="check" />
          Assets librart
        </p>
      </div>
    </div>
  );
}
