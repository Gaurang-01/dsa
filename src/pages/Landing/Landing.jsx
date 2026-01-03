import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";

function Landing() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>
          Turning Campus Waste into <span>Innovation</span>
        </h1>
        <p>
          A hyper-local platform connecting labs, industries, and students
          to reuse valuable materials instead of landfills.
        </p>
      </section>
    </>
  );
}

export default Landing;
