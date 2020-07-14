import React from 'react';
import styles from './analysis.module.css'

const Analysis = () => {
  return <main id="mainContent">
    <div className={`container ${styles.contentSize}`}>
      <div className="row justify-content-center pb-5 pt-5">
      <h2 id="notes-on-respondus-security-and-privacy-policies">Notes on Respondus Security and Privacy Policies</h2>
    <div><h4>Background</h4>
    <p>In 2018, Statistics Canada reported that &quot;94% of Canadians
    had home Internet access&quot;, 84% of which &quot;bought goods or
    services online [...] spending $57.4 billion&quot; <sup><a href="#8">[8]</a></sup>.  With
    physical distancing measures brought on by COVID-19, these
    numbers are likely to rise as more Canadians work and study
    from home.</p>
    <p>Unfortunately, Statistics Canada also found that 57% of
    &quot;Canadian Internet users reported experiencing a cyber
    security incident in 2018&quot; as did 21% of businesses in 2017.
    In particular, universities reported the second highest
    level of incidents (46%) of any sector in Canada, following
    only the banking sector (47%) <sup><a href="#9">[9]</a></sup>.</p>
    <p>It was also revealed in 2018 that the data analytics firm <em>Cambridge Analytica</em> used data from millions of users&#39;
    Facebook accounts in attempts to influence the Brexit
    referendum and the 2016 US presidential election.  This
    scandal also brought to light the breadth and depth of
    personal data collected and utilized by Internet companies
    such as Facebook <sup><a href="#10">[10]</a></sup>.</p>
    <p>In this light, it is natural to ask what impact technologies
    such as LockDown Browser and Respondus Monitor have on the
    security and privacy of its users.  Before examining the
    relevant privacy policies and terms of use provided by
    Respondus to see what answers they provide, it is important
    to note the following excerpts.</p>
    <div className="pl-4 pr-5">
    <p>You may not [...] reverse engineer, decompile or
    otherwise attempt to extract the source code of the
    Software or any part thereof; [...] or [...] publish
    any results of benchmark tests run on the Software</p>
    </div>
    <p>LockDown Browser Terms of Use <sup><a href="#3">[3]</a></sup></p>
    <div className="pl-4 pr-5">
    <p>You may not reverse engineer or attempt to extract the
    source code of Respondus Monitor, unless laws prohibit
    those restrictions or you have written permission from
    Respondus. </p>
    </div>
    <p>Respondus Monitor Student Terms of Use <sup><a href="#6">[6]</a></sup></p>
    <p>In effect, these terms prevent the user from legally
    investigating the behaviour of these technologies which
    students might be forced to download and use.  While the
    intent may be to shield the intellectual property of
    Respondus, such terms also mean that the company must be
    taken at their word when it comes to their security and
    privacy claims.</p></div>
    <div>
    <h4 id="lockdown-browser">LockDown Browser</h4><br />

    <p>According the official website,</p>
    <div className="pl-4 pr-5">
    <p>LockDown Browser is a custom browser that locks down the
    testing environment </p>
    <p>[...]</p>
    <p>LockDown Browser also blocks hundreds of common and
    advanced methods of digital cheating, such as the use of
    Virtual Machines, remote desktops, screensharing, instant
    messaging, screen recording, keystroke combinations,
    launching applications with timers/alerts, browser cache
    exploits and much more.
    <sup><a href="#1">[1]</a></sup></p>
    </div>
    <p>In order to do this, it is clear that LockDown Browser must
    have full access to the entire computer system in which it
    is installed, including the other processes running on the
    machine.  Respondus does not, however, specify the complete
    list of properties on the computer or network which it
    monitors or controls during or after operation.  Indeed, the
    Respondus Technical Support site confirms that the
    application requires Administrator privileges in order to
    operate<sup><a href="#11">[11]</a></sup>.  The site even goes so far as to suggest that
    users</p>
    <div className="pl-4 pr-5">
    <p>Temporarily relax all security software. Afterwards,
    restore your anti-virus to its regular status.</p>
    </div>
    <p>This leaves users&#39; devices exposed and potentially
    vulnerable to attack while connected to the Internet to
    complete their assessments.  Meanwhile many personal
    computers these days contain a great deal of confidential,
    sensitive, or otherwise private information.</p>
    <p>Unfortunately, despite the extremely privileged access this
    software has to user devices and the potential
    vulnerabilities it introduces, the Terms of Use disclaim all
    warranty or liability (emphasis added).</p>
    <div className="pl-4 pr-5">
    <p>Disclaimer of Warranty. The software and documentation are
    provided as is without warranty of any kind. To the
    maximum extent permitted by applicable law, Respondus,
    Inc. further disclaims all warranties, including without
    limitation any implied warranties of merchantability,
    fitness for a particular purpose, and noninfringement. <strong>The
    entire risk arising out of the use or performance of the
    software and documentation remains with you.</strong></p>
    <p>[...]</p>
    <p>Limitation of Liability. To the maximum extent permitted
    by applicable law, <strong>in no event will Licensor</strong> or its
    suppliers or resellers <strong>be liable for any</strong> indirect,
    special, incidental or consequential <strong>damages arising out
    of the use of or inability to use the software [...] even
    if advised of the possibility</strong> thereof, and regardless of
    the legal or equitable theory (contract, tort or
    otherwise) upon which the claim is based.
    <sup><a href="#3">[3]</a></sup></p>
    </div>
    <p>In other words, Respondus claims not to bear any
    responsibility for any damages sustained due to its
    software, <strong>even if it is advised of the possibility</strong>.  As
    it says, the entire risk remains with the user.
    Furthermore, because</p>
    <div className="pl-4 pr-5">
    <p>The Terms of Use for LockDown Browser must be agreed to
    by users prior to installing the application.
    <sup><a href="#2">[2]</a></sup></p>
    </div>
    <p>If this software is made mandatory, students will have no
    choice but to use potentially dangerous software and agree
    to terms of use which deny any responsibility whatsoever for
    the consequences of said software.</p>

    <p>The LockDown Browser Privacy Policy states that</p>
    <div className="pl-4 pr-5">
    <p>[...] in most situations, personal information isn&#39;t
    gathered or processed by Respondus.</p>
    <p>However, there are two cases where LockDown Browser
    may process personal information. The first is if the
    user chooses to use &quot;Help Center&quot; to troubleshoot a
    technical issue with LockDown Browser, such as internet
    connectivity.</p>
    <p>[...]</p>
    <p>A second situation where LockDown Browser may process
    personal information is when the &quot;early exit&quot; feature
    is used by a student to terminate an assessment before
    it is completed. [...] Respondus stores the username
    [...] and the reason provided by the user for earlys
    termination. Respondus makes no other use of this
    personal information.
    <sup><a href="#2">[2]</a></sup></p>
    </div>
    <p>In the former case, where the user may be forced to use the
    Help Center, LockDown Browser performs a System Check.</p>
    <div className="pl-4 pr-5">
    <p>The System Check gathers certain information from your
    computing device, the networking environment, and the
    institution&#39;s Learning Management System.
    <sup><a href="#3">[3]</a></sup></p>
    </div>
    <p>This policy does not state what information is collected,
    only that</p>
    <div className="pl-4 pr-5">
    <p>All data gathered during the System Check is presented to
    you on your screen
    <sup><a href="#3">[3]</a></sup></p>
    </div>
    <p>Unfortunately, the user must consent to the Terms of Use
    well before they learn what this data entails, in this case.
    The Terms of Use go on to say</p>
    <div className="pl-4 pr-5">
    <p>System Check data and log files may be sent to a Respondus
    web server or a third party cloud server for storage and
    further processing by Respondus.
    <sup><a href="#3">[3]</a></sup></p>
    </div>
    <p>Once again, Respondus does not enumerate the contents of
    these log files; it only says that</p>
    <div className="pl-4 pr-5">
    <p>Log files contain details of the interaction between
    LockDown Browser and your institution&#39;s Learning
    Management System
    [...]
    Log files are stored locally on your computer in an
    encrypted format and, if transmitted to Respondus, are
    sent in encrypted format over HTTPS.
    <sup><a href="#3">[3]</a></sup></p>
    </div>
    <p>While it is clearly helpful that log files are stored
    locally in encrypted format, and transmitted over HTTPS, the
    Terms of Use do not say if they are stored on Respondus
    servers, and if so, whether they are stored in encrypted
    format, or for how long.</p></div>
    <div>
    <h4 id="respondus-monitor">Respondus Monitor</h4>
    <div className="pl-4 pr-5">
    <p>Respondus Monitor builds upon the power of LockDown
    Browser, using a student’s webcam and industry-leading
    video analytics to prevent cheating during non-proctored
    exams.
    <sup><a href="#4">[4]</a></sup></p>
    </div>
    <p>Unlike LockDown Browser, </p>
    <div className="pl-4 pr-5">
    <p>Respondus Monitor is a cloud-based service (&quot;Respondus
    Monitor Services&quot;) and software (&quot;Respondus Monitor
    Software&quot;) (also collectively referred to in these Terms
    as &quot;Respondus Monitor&quot;)
    <sup><a href="#6">[6]</a></sup></p>
    </div>
    <p>which generally means that users&#39; data will have to be sent
    to Respondus servers (in the US, or elsewhere) for much of
    the processing.  The data that is collected by Respondus
    Monitor is quite invasive, and includes at a minimum audio
    and video recordings, though the Terms of Use put no limit on the
    data collected<sup><a href="#6">[6]</a></sup></p>
    <div className="pl-4 pr-5">
    <p>Respondus Monitor processes other data from the exam
    session, such as: [...] the quality of the user&#39;s internet
    connection during the exam session (including the time and
    duration of any internet disconnections); mouse, keyboard
    and screen activity; </p>
    <p>[...]</p>
    <p>Respondus Monitor continually tracks the applications and
    processes that are running on the computing device during
    an exam session.
    <sup><a href="#5">[5]</a></sup></p>
    </div>
    <p>By default Respondus saves data for up to five years, but
    states in their privacy policy that the University may
    change the data retention period<sup><a href="#5">[5]</a></sup>.  (Note however that
    this conflicts somewhat with the Terms of Use, which state
    that &quot;all recordings of students [will be saved] for a
    period of one (1) year&quot;, but the University can grant them
    the right to save the data for up to five years<sup><a href="#6">[6]</a></sup>.)
    According to the Terms of Use,</p>
    <div className="pl-4 pr-5">
    <p>your Institution shall nonetheless have the right (but not
    the obligation) in its sole discretion, to refuse, delete
    or move any information or data that is available via
    Respondus Monitor, for any reason,</p>
    </div>
    <p>so that the University may decide to move the data
    elsewhere for permanent storage.  As of yet, there has been
    no official policy on this put forth by the University, but
    as far as Respondus is concerned,</p>
    <div className="pl-4 pr-5">
    <p>Your Institution further disclaims any responsibility for
    the deletion, failure to store, misdelivery, or untimely
    delivery of any information or data. Your Institution
    disclaims any responsibility for any harm resulting from
    downloading or accessing any information or data through
    Respondus Monitor. You will bear all risk associated with
    any information or data you access.
    <sup><a href="#6">[6]</a></sup></p>
    </div>
    <p>Even on Respondus servers however, it does not take full
    responsibility for the immense and personal dataset it
    collects.  It does not guarantee the removal of the data
    after deletion</p>
    <div className="pl-4 pr-5">
    <p>Respondus does not guarantee removal of all
    traces of any information or data (including recordings)
    from the Respondus Monitor Services after deletion.
    <sup><a href="#6">[6]</a></sup></p>
    </div>
    <p>and accepts no liability for the protection of the data</p>
    <div className="pl-4 pr-5">
    <p>Respondus shall not be liable if a security breach occurs,
    if the site malfunctions, or if information is misused or
    mismanaged in any way to your detriment or the detriment
    of a student or third party, whether by Respondus, your
    institution, or an unauthorized third party.
    <sup><a href="#6">[6]</a></sup></p>
    </div>
    <p>Of course, while Respondus accepts no responsibility for the
    data it collects, it also wishes to take full advantage
    itself, or even to share it with researchers.  The users, who
    provide the data, get no say or share in its outcome.</p>
    <div className="pl-4 pr-5">
    <p>[B]y providing information or data to Respondus, you grant
    Respondus, and its affiliates, a fully paid-up, perpetual
    license to use, store, modify, copy, and transmit any such
    information or data for the purpose of carrying out the
    Respondus Monitor Services in accordance with these Terms.
    <sup><a href="#6">[6]</a></sup></p>
    </div>

    <p>After years of concern over the potential for misuse of
    facial recognition systems, from  discrimination to mass
    surveillance, as well as studies demonstrating that such
    systems perform disproportionately worse for people of
    colour, several technology giants including Amazon, IBM, and
    Microsoft have recently banned the use of their facial
    recognition systems by the police in the US<sup><a href="#12">[12]</a></sup>.</p>
    <p>Unfortunately, these are precisely the technologies upon
    which Respondus Monitor relies.</p>
    <div className="pl-4 pr-5">
    <p>The webcam recording itself goes through an automated
    &quot;post-processing&quot; step that utilizes facial detection and
    facial recognition technology</p>
    <p>[...]</p>
    <p>An overall value is generated for an exam session that
    helps the instructor determine the risk that exam
    violations have occurred. Again, these analytics are
    generated automatically by the Respondus Monitor
    application.
    <sup><a href="#5">[5]</a></sup></p>
    </div>
    <p>While Respondus makes no claim regarding the bias its
    automated systems are likely to suffer from it, many
    prominent, commercial facial recognition programs suffer
    from &quot;skin-type and gender biases&quot;<sup><a href="#13">[13]</a></sup>.  This makes it more
    likely that students from a visible minority as targeted for
    undue scrutiny by the system, which notifies the instructor
    of suspicious behaviour<sup><a href="#4">[4]</a></sup>.  This has the potential to
    reinforce any existing biases an instructor might have.
    Even if the instructor should be perfectly fair-minded, it
    is likely that some of those students who belong to visible
    minorities may suffer disproportionate levels of stress
    because of this software.  As in previous such cases,
    Respondus refuses to take responsibility for the results of
    its software:</p>
    <div className="pl-4 pr-5">
    <p>Respondus disclaims responsibility or liability for the
    accuracy, content, completeness, legality, reliability,
    operability or availability of information or data in
    Respondus Monitor.
    <sup><a href="#6">[6]</a></sup></p>
    </div>
    </div>
    <h4 id="conclusion">Conclusion</h4>
    <p>After having examined the major policies concerning security
    and privacry in the LockDown Browser and Respondus Monitor
    technologies it seems clear that the standards to which this
    software is kept is lacking.  Furthermore, since the
    software is proprietary, and any attempts to probe its
    behaviour are strictly forbidden, it is impossible to truly
    know what the software is doing.</p>
    <p>Nevertheless, it is clear that a broad and deep amount of
    personal information is gathered and exploited.  While some
    regard is given for security -- mostly this concerns
    encrypting this data in transit -- little is given for other
    aspects of security, and less is given for the violations of
    privacy committed.</p>
    <p>The technology in question also utilizes highly divisive
    facial recognition software at its core.  While
    Respondus does not address it, facial recognition is
    frequently found to be inaccurate and possibly even
    discriminatory.</p>
    <p>Furthermore, it is clear from the Privacy Policies and Terms
    of Use of LockDown Browser and Respondus Monitor that
    Respondus takes no responsibility for their products, the
    data they collect, or the students who use their software.
    Given that the University seeks to license their software
    for a steep fee, one would hope that Respondus would develop
    a much greater respect for its customers.</p>
    <div className="pl-4 pr-5">
    <p>Respondus reserves the right to change these Terms at any
    time, at its discretion, without advance notice to you.
    <sup><a href="#6">[6]</a></sup></p>
    </div>
    <h4 id="other-notable-excerpts">Other Notable Excerpts</h4>
    <div className="pl-4 pr-5">
    <p>Powerful analytics are used to detect suspicious behaviors
    during an exam session. Video segments with potential exam
    violations are flagged for the instructor, with an overall
    risk level assigned to the exam session.
    <sup><a href="#4">[4]</a></sup></p>
    </div>

    <div className="pl-4 pr-5">
    <p>At the heart of Respondus Monitor is a powerful artificial
    intelligence engine, <strong>Monitor AI<sup>TM</sup></strong>, that performs a
    second-by-second analysis of the exam session. The first
    layer of <strong>Monitor AI</strong> includes advanced algorithms for
    facial detection, motion, and lighting to analyze the
    student and examination environment. The next layer uses
    data from the computing device (keyboard activity, mouse
    movements, hardware changes, etc.) to identify patterns
    and anomalies associated with cheating. Finally, the
    student&#39;s interaction with the exam instrument itself is
    woven into the analysis, including question-by-question
    comparisons with other students who took the same exam.
    <sup><a href="#4">[4]</a></sup></p>
    </div>

    <div className="pl-4 pr-5">
    <p><strong>Review Priority<sup>TM</sup></strong> is a patent-pending
    method for ranking proctoring results according to the
    risk that exam violations have occurred. In short, it
    provides instructors with simple, meaningful results that
    help them know whether an exam session warrants deeper
    scrutiny.
    <sup><a href="#4">[4]</a></sup></p>
    </div>

    <div className="pl-4 pr-5">
    <p>Respondus reserves the right at all times to disclose any
    information or data [...] as necessary, to comply with the
    law, a regulation or a governmental request,
    <sup><a href="#6">[6]</a></sup></p>
    </div>

    <div className="pl-4 pr-5">
    <p>Respondus monitor is provided to you, &quot;as is,&quot; with no
    warranties whatsoever. All express, implied, and statutory
    warranties, including, without limitation, the warranties
    of merchantability, fitness for a particular purpose, and
    non-infringement, are expressly disclaimed. To the fullest
    extent permitted by law, Respondus disclaims any
    warranties for the security, reliability, timeliness, and
    performance of respondus monitor. Respondus similarly
    disclaims, to the fullest extent permitted by law, any
    warranties for any information or advice obtained through
    respondus monitor.</p>
    <p>You understand and agree that any information or data
    downloaded or otherwise obtained through the use of
    Respondus Monitor is obtained at your own discretion and
    risk and that you will be solely responsible for any
    damages to your computer system or loss of data that may
    result in the download of such information or data. Under
    no circumstances shall respondus be liable to any user on
    account of that user&#39;s use or misuse of and reliance on
    Respondus Monitor. Such limitation of liability shall
    apply to prevent recovery of direct, indirect, incidental,
    consequential, special, exemplary, and punitive damages
    (even if Respondus has been advised of the possibility of
    such damages). Such limitation of liability shall apply
    whether the damages arise from use or misuse of and
    reliance on Respondus Monitor, from inability to use the
    Respondus Monitor, or from the interruption, suspension,
    or termination of Respondus Monitor or by reason of any
    information or advice received through Respondus Monitor.
    The foregoing disclaimers, waivers and limitations shall
    apply notwithstanding any failure of essential purpose of
    any limited remedy.
    <sup><a href="#6">[6]</a></sup></p>
    </div>
    <div>
    <h4>References</h4>
    <p>LockDown Browser Overview
    : <a href="https://web.respondus.com/he/lockdownbrowser/">https://web.respondus.com/he/lockdownbrowser/</a></p>
    <p>LockDown Browser Privacy Policy
    : <a href="https://web.respondus.com/privacy/privacy-additional-lockdown-browser/">https://web.respondus.com/privacy/privacy-additional-lockdown-browser/</a></p>
    <p>LockDown Browser Terms of Use
    : <a href="https://web.respondus.com/tou-ldb/">https://web.respondus.com/tou-ldb/</a></p>
    <p>Respondus Monitor Overview
    : <a href="https://web.respondus.com/he/monitor/">https://web.respondus.com/he/monitor/</a></p>
    <p>Respondus Monitor Privacy Policy
    : <a href="https://web.respondus.com/privacy/privacy-additional-monitor/">https://web.respondus.com/privacy/privacy-additional-monitor/</a></p>
    <p>Respondus Monitor Student Terms of Use
    : <a href="https://web.respondus.com/tou-monitor-student/">https://web.respondus.com/tou-monitor-student/</a></p>
    <p>LockDown Browser vs. Locked Browser Plugins
    : <a href="https://web.respondus.com/lockdown-browser-vs-locked-browser-plugins/">https://web.respondus.com/lockdown-browser-vs-locked-browser-plugins/</a></p>
    <p>Canadian Internet Use Survey
    : <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/191029/dq191029a-eng.htm">https://www150.statcan.gc.ca/n1/daily-quotidien/191029/dq191029a-eng.htm</a></p>
    <p>Cybercrime in Canada
    : <a href="https://www150.statcan.gc.ca/n1/pub/89-28-0001/2018001/article/00015-eng.htm">https://www150.statcan.gc.ca/n1/pub/89-28-0001/2018001/article/00015-eng.htm</a></p>
    <p>Cambridge Analytica, AggregateIQ and the Facebook scandal: A guide to who’s accused of what
    : <a href="https://www.theglobeandmail.com/world/article-what-is-cambridge-analytica-and-what-did-it-do-a-guide/">https://www.theglobeandmail.com/world/article-what-is-cambridge-analytica-and-what-did-it-do-a-guide/</a></p>
    <p>I need Administrator rights to install Respondus LockDown Browser (Windows)
    : <a href="https://support.respondus.com/support/index.php?/Knowledgebase/Article/View/147/25/i-need-administrator-rights-to-install-respondus-lockdown-browser-windows">https://support.respondus.com/support/index.php?/Knowledgebase/Article/View/147/25/i-need-administrator-rights-to-install-respondus-lockdown-browser-windows</a></p>
    <p>Microsoft won’t sell police its facial-recognition technology, following similar moves by Amazon and IBM
    : <a href="https://www.washingtonpost.com/technology/2020/06/11/microsoft-facial-recognition/">https://www.washingtonpost.com/technology/2020/06/11/microsoft-facial-recognition/</a></p>
    <p>Study finds gender and skin-type bias in commercial artificial-intelligence systems
    : <a href="http://news.mit.edu/2018/study-finds-gender-skin-type-bias-artificial-intelligence-systems-0212">http://news.mit.edu/2018/study-finds-gender-skin-type-bias-artificial-intelligence-systems-0212</a></p>
    <h4 id="note">Note</h4>
    <p>All data taken as of 2 July 2020.</p>
    <p><sup id="1">[1]</sup>: <a href="https://web.respondus.com/he/lockdownbrowser/">LockDown Browser Overview</a><br />
    <sup id="2">[2]</sup>: <a href="https://web.respondus.com/privacy/privacy-additional-lockdown-browser/">LockDown Browser Privacy Policy</a><br />
    <sup id="3">[3]</sup>: <a href="https://web.respondus.com/tou-ldb/">LockDown Browser Terms of Use</a><br />
    <sup id="4">[4]</sup>: <a href="https://web.respondus.com/he/monitor/">Respondus Monitor Overview</a><br />
    <sup id="5">[5]</sup>: <a href="https://web.respondus.com/privacy/privacy-additional-monitor/">Respondus Monitor Privacy Policy</a><br />
    <sup id="6">[6]</sup>: <a href="https://web.respondus.com/tou-monitor-student/">Respondus Monitor Student Terms of Use</a><br />
    <sup id="7">[7]</sup>: <a href="https://web.respondus.com/lockdown-browser-vs-locked-browser-plugins/">LockDown Browser vs. Locked Browser Plugins</a><br />
    <sup id="8">[8]</sup>: <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/191029/dq191029a-eng.htm">Canadian Internet Use Survey</a><br />
    <sup id="9">[9]</sup>: <a href="https://www150.statcan.gc.ca/n1/pub/89-28-0001/2018001/article/00015-eng.htm">Cybercrime in Canada</a><br />
    <sup id="10">[10]</sup>: <a href="https://www.theglobeandmail.com/world/article-what-is-cambridge-analytica-and-what-did-it-do-a-guide/">Cambridge Analytica, AggregateIQ and the Facebook scandal: A guide to who’s accused of what</a><br />
    <sup id="11">[11]</sup>: <a href="https://support.respondus.com/support/index.php?/Knowledgebase/Article/View/147/25/i-need-administrator-rights-to-install-respondus-lockdown-browser-windows">I need Administrator rights to install Respondus LockDown Browser (Windows)</a><br />
    <sup id="12">[12]</sup>: <a href="https://www.washingtonpost.com/technology/2020/06/11/microsoft-facial-recognition/">Microsoft won’t sell police its facial-recognition technology, following similar moves by Amazon and IBM</a><br />
    <sup id="13">[13]</sup>: <a href="http://news.mit.edu/2018/study-finds-gender-skin-type-bias-artificial-intelligence-systems-0212">Study finds gender and skin-type bias in commercial artificial-intelligence systems</a><br /></p>
    </div>
    </div>
    </div>
  </main>;
}
export default Analysis;
