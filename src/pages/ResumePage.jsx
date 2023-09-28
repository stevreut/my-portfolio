// This is a static page mocking an "About Us" section for our fake user data
export default function ResumePage() {
    return (
      <div>
        <h2>Resum&eacute;</h2>
        <section>
          <h3 className="resume-group">Experience</h3>
          <dl>
            <dt>Wells Fargo Bank (Philadelphia, PA)</dt>
            <dt>(Wachovia, First Union, CoreStates)</dt>
              <dd>Software development for one of the world's leading systems for processing
                international wire payments.  Extensive experience on the HP NonStop ("Tandem") 
                platform that supported this processing - a home-grown system highly customized
                to support the evolving needs of the commercial customers it served.
              </dd>
            <dt>Germantown Savings Bank (Bala-Cynwyd, PA)</dt>
              <dd>Software development (IBM mainframe - COBOL, JCL, etc.) for a mid-sized regional
                bank which was a local technology leader in the industry.
              </dd>
            <dt>Municipal Code Corporation (Tallahassee, FL)</dt>
              <dd></dd>
          </dl>
        </section>
        <section>
          <h3 className="resume-group">Education</h3>
          <dl>
          <dt>University of Pennsylvania Full-Stack Coding Boot Camp (Philadelphia, PA)</dt>
            <dd>An intensive training program on web development across the full spectrum of
              technologies from those supporting front-end internet users to back-end 
              database concerns</dd>
          <dt>Florida State Univerity (Tallahassee, FL)</dt>
            <dd>Studies concentrated in [applied] Mathematics with work toward a minor in Computer Science</dd>
          <dt>Brevard Community College (Cocoa, FL)</dt>
            <dd>Associate of Arts - Mathematics</dd>
        </dl>
        </section>
      </div>
    );
  }
  