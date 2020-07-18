import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around pb-3">
          <div className="col-8 col-md-5">
            <p className={styles.description}>
              View the code for this website on <a href="https://github.com/upetition/Stop-uOttawa-Surveillance">GitHub</a>
            </p>
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
