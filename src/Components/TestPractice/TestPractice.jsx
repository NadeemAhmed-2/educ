import React from "react";
import "./TestPractice.css";
import pdf from "../../pdf/physicsFormula-1.pdf"
import py from "../../pdf/physicsFormula-2.pdf"
import maths from "../pcmNOtes.pdf"
const TestPractice = () => {


const openPdf = () => {
  window.open(pdf, "_blank");
};
const openPhy2 = () => {
  window.open(py, "_blank");
}
const openmaths = () => {
  window.open(maths,"_blank")
}

  return (
    <div className="container1">
      <h1>Practice online test</h1>

      <section>
        <h2>Intermediate</h2>
        <ul>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.istudentworld.neetpapers"
              target="_blank"
              rel="noopener noreferrer"
            >
              NEET PRACTICE APP
            </a>
          </li>
          <li>
            <a
              href="https://www.nta.ac.in/Quiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              NTA
            </a>
          </li>

          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.examgoal.jeemainpreparation.app&hl=en_IN&gl=US"
              target="_blank"
              rel="noopener noreferrer"
            >
              JEE MAIN APP
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.Lastyear.jeeadvancesolvedpapers&hl=en_GB"
              target="_blank"
              rel="noopener noreferrer"
            >
              JEE ADVANCE APP
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.iexamonline.eamcetmedprev"
              target="_blank"
              rel="noopener noreferrer"
            >
              EAMCET APP
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Enginnering</h2>
        <h3>Practice DSA</h3>
        <ul>
          <li>
            <a
              href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DSA SHEET - 1 by Striver
            </a>
          </li>
          <li>
            <a
              href="https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DSA SHEET - 2 by love Babbar
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/spreadsheets/u/0/d/1hXserPuxVoWMG9Hs7y8wVdRCJTcj3xMBAEYUOXQ5Xag/htmlview?pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              DSA SHEET - 3 by Apna College
            </a>
          </li>
          <li>
            <a
              href="https://learnyard.com/practice/dsa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DSA SHEET - 4 by Fraz
            </a>
          </li>
          <li>
            <a
              href="https://neetcode.io/practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              DSA SHEET - 5 Neetcode
            </a>
          </li>
        </ul>
        <h3>Websites to Practice</h3>
        <ul>
          <li>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LEETCODE
            </a>
          </li>
          <li>
            <a
              href="https://www.geeksforgeeks.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GFG
            </a>
          </li>
          <li>
            <a
              href="https://www.codechef.com/practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODECHEF
            </a>
          </li>
          <li>
            <a
              href="https://www.indiabix.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              APTITUDE
            </a>
          </li>
        </ul>
        
      </section>

      
      <section>
        <h2>General Tips</h2>
        <h3>Formula Sheets</h3>
        <ul>
          <li onClick={openmaths}>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Chemistry
            </a>
          </li>
          <li onClick={openPdf}>
            <a
              href="/pdf/physicsFormula-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Physics - 1
            </a>
          </li>
          <li onClick={openPhy2}>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Physics - 2
            </a>
          </li>
          <li onClick={openmaths}>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Maths
            </a>
          </li>

          <li>
            <strong>Previous Years’ Papers</strong>: Practice to understand the
            exam pattern.
          </li>
          <li>
            <strong>Mock Tests and Online Resources</strong>: For regular
            practice and self-assessment.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TestPractice;
