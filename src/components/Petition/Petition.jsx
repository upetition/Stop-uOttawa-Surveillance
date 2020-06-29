import React from "react";
import PetitionForm from "../PetitionForm";
import styles from "./petition.module.css";

const Petition = () => {
  return <main id="mainContent">
    <div className={`container ${styles.contentSize}`}>
      <div className="row justify-content-center pb-5">
        <h2>Petition</h2>
        <p>We as students of the University of Ottawa hereby issue a formal request that the &quot;Respondus Lockdown Browser&quot;, &quot;Respondus Monitor&quot;, and any software that must be installed on a user&#39;s computer for the explicit purpose of monitoring a student, gathering data about a student, or restricting the capabilities of the student&#39;s computer; or utilizes any form of recorded video and/or audio feed for the purpose of monitoring a student; or utilizes any form of live video and/or audio feed for the purpose of monitoring a student that shall be viewed or monitored by a proctor who is not an employee or faculty member of the University of Ottawa, be completely banned throughout the institution</p>

        <p>Programs like the aforementioned browser have fundamental flaws that are directly linked to their very method of operation,
        and therefore the problem cannot simply be resolved by using a different software.</p>


        <h4>Privacy</h4>
        <p>Firstly for the program to be effective it must be the sole device that the examinee has access to,
        but in order to make this guarantee it is imperative to monitor every action of the examinee.
        The best known way to make this guarantee is through video surveillance which is where problems arise.</p>

        <p>Requiring people to be filmed in a semi-public location (like on campus) is entirely different from requiring people be recorded in their own homes.
        We do not believe that it is acceptable that we be required to allow anyone to gain video access into the contents of our private property.
        Even law enforcement officers cannot search private property without a court order,
        yet for these types of software to be effective they must have a recording of the entire surrounding of where the exam is taking place.
        This is an intrusion of the privacy of anyone forced to use such a program.</p>

        <h4>Anxiety</h4>
        <p>A further issue with such a program is that to be effective there must be an analysis of the video recording.
        Due to the sheer volume of video that would be recorded,
        such a program needs to have some type of filtering algorithm to allow a group of proctors to pay attention only to key moments.
        Otherwise the amount of video would be impossible to review.</p>

        <p>We then need to trust that the algorithm is unbiased by race, gender, religious symbols, and any other freedoms of expression.
        However it has been established that it&apos;s extremely difficult to remove bias from pattern matching algorithms,
        so it becomes likely that some people would be flagged more often than others for similar behaviour.</p>

        <p>The knowledge that one is being recorded and analyzed can also cause additional stress, potentially causing students to underperform,
        and thereby detracting from the efficacy of the examination in question.
        Furthermore stress does not affect everyone equally,
        it is particularly difficult for people with anxiety disorders, who may even be registered with SASS.
        It would be difficult to add an accommodation for no use of video recording software for students who it might affect,
        because most accommodations come directly as a request from a clinical professional.
        It would be extremely difficult, simply in terms of time, to re-examine anyone who thinks they might need this accommodation.</p>

        <h4>Technology</h4>
        <p>The final issue that will be addressed here is not fundamental, but is often recurring.
        Any such program will have some list of compatible hardware and software.
        Notably video recording requires a webcam which not everyone has.
        In addition to this hardware limitation, Respondus&apos;s software is only compatible with MacOS and Windows.
        There are many students who have been Linux users for many years and no longer own a windows or mac machine.
        There are usually workarounds such as using Adobe Connect on mobile.
        In this case there is no workaround because the software is made precisely to prevent it being run in a virtual machine,
        and exams cannot be performed on mobile.
        This means that some students would need not only to purchase webcams but also a Windows license,
        and go through the time to install a new operating system.</p>
      </div>
      <div className="row justify-content-center pb-5">
        <PetitionForm />
      </div>
    </div>
  </main>;
}
export default Petition;
