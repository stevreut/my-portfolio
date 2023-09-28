// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
    return (
      <div className="container pt-4">
        <h2>About Me</h2>
          <div className="prof-img-div"><img src="/sr-wheeler-pk-trimmed.jpg" className="profile-img" /></div>
          <p>I have worked as a software developer in the banking industry for many years.
          Although I have some experienced (COBOL) on IBM mainframe systems, by far the largest
          part of my time in banking was doing software development and support for an international
          payment processing system, being one of the members of a small team that developed and
          supported that system - one of the highest-volume systems of its kind in the world.</p>

        <p>More recently, I have left the world of banking to pursue other interests - though
          still in the world of software development.</p>
        
        <p>I will soon have finished an intensive training program focused on full-stack web development,
          doing so to broaden the spectrum of my software knowledge.</p>

        <p>Although I have a wide variety of interests, I have a particular life-long love of mathematics
          as well as the physical sciences generally.  I would be thrilled if my career in software
          brings me closer to the world of science and medicine in the years to come.
        </p>
      </div>
    );
  }
  