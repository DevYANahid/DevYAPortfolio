import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software Developer, Founder of <a href="https://www.facebook.com/profile.php?id=61593852407509" target="main" className="company-link" style={{ color: "yellow", }}  >SoftVivo</a>.
        </motion.h1>

        <p className="sub-title">
          I’m Yeasin Arafat, a software designer and entrepreneur based in Canada. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>

        <div className="all-icons flex">
          <a href="https://twitter.com/web_clone_" target="main" className="icon icon-twitter"></a>
          <a href="https://github.com/DevYANahid" target="main" className="icon icon-github"></a>
          <a href="https://www.linkedin.com/in/devyanahid/" target="main" className="icon icon-linkedin"></a>
          <a href="https://instagram.com" target="main" className="icon icon-instagram"></a>
          <a href="./YANahid.pdf" target="main" type="submit" className="submit icon icon-link">
            Resume
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
