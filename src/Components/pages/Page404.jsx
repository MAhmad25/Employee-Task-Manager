import { useEffect, useRef } from "react";
import styles from "../pages/Page404.module.css";
import { Link } from "react-router-dom";

const Page404 = () => {
      const visualRef = useRef(null);

      useEffect(() => {
            const handleResize = () => {
                  const width = window.innerWidth;
                  const height = window.innerHeight;
                  const ratio = 45 / (width / height);

                  if (visualRef.current) {
                        visualRef.current.style.transform = `translate(-50%, -50%) rotate(-${ratio}deg)`;
                  }
            };

            handleResize();
            window.addEventListener("resize", handleResize);
            return () => {
                  window.removeEventListener("resize", handleResize);
            };
      }, []);

      return (
            <div className="overflow-hidden min-h-screen p-[1em] bg-[#121212]">
                  <Link to="/" className={styles.link} aria-label="Go to Home Page">
                        <svg height="0.8em" width="0.8em" viewBox="0 0 2 1" preserveAspectRatio="none">
                              <polyline fill="none" stroke="#777777" strokeWidth="0.1" points="0.9,0.1 0.1,0.5 0.9,0.9" />
                        </svg>
                        Home
                  </Link>
                  <div className={styles.backgroundWrapper}>
                        <h1 ref={visualRef}>404</h1>
                  </div>
                  <p className={styles.text}>The page you are looking for does not exist.</p>
            </div>
      );
};

export default Page404;
