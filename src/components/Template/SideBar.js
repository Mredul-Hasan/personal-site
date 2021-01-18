import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Mredul Hasan</h2>
        <p>
          <a href="mailto:mredulhasan93@gmail.com">mredulhasan93@gmail.com</a>
          OR
          <a href="mailto:mredul1438@cseku.ac.bd">mredul1438@cseku.ac.bd</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mredul. I am a JS learner, MERN enthusiast. <br />
        I am a <a href="http://cseku.ac.bd/">KUCSE</a> graduate. <br />
        Currently working on Reactjs at <a href="http://techoptions.com.bd/">TechOptions</a>. <br />
        Before here I worked at <a href="https://www.aamratechnologies.com/">Aamra Technologies Limited</a> as Programmer
        , <a href="#0">Rafiqul Islam College</a> as a Lecturer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mredul Hasan</p>
    </section>
  </section>
);

export default SideBar;
