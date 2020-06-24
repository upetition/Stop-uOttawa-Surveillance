import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <p className={styles.description}>
              View the code for this website on <a href="https://github.com/DudeRandom21/Stop-uOttawa-Surveillance">GitHub</a>
            </p>
          </div>
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a className={styles.footerlink} href="/">
                  Home
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/petition">
                  Petition
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/privacy">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
