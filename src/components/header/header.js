import React, { Component } from "react";
import styled from "styled-components";
import styles from "./header.css";

export default class Header extends Component {
  render() {
    const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
  }
  
  @media (min-width: 500px) {
    .header {
      width: 450px;
    }
  `;

    return (
      <header id="home">
        <button>
          <a className={styles.button} href="#about">
            About Me
          </a>
        </button>
        <button>
          <a className={styles.button} onClick href="#education">
            Education
          </a>
        </button>
        <button>
          <a className={styles.button} href="#resume">
            Resume
          </a>
        </button>

        <button>
          <a className={styles.button} href="#portfolio">
            Websites
          </a>
        </button>
        <button>
          <a className={styles.button} href="#recommendations">
            Recommendations
          </a>
        </button>

        {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <hr />
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}
