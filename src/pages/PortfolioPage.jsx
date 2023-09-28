import Project from '../components/Project';

// This is a static page mocking an "Project" section for our fake user data
export default function PortfolioPage() {
    return (
      <div className="container pt-4">
        <h2>Portfolio Page</h2>
        <h3>Some of my recent work - a collection which I hope will grow and continue to improve in quality in the months to come</h3>
        <div className="projects-container">
          <Project key={1} repo="just-another-text-editor" desc="Demonstration minimal text editor based on PWA technology" />
          <Project key={2} repo="svg-maker" desc="Tool to enable persisted storage of notes on a server" />
          <Project key={3} repo="weather-dashboard" desc="Utility using third-party APIs to retrieve and display 5-day weather forecast information for a specified city" />
          <Project key={4} repo="js-password-generator" desc="Generates a random password via HTML/CSS/Javascript based on user provided criteria" />
          <Project key={5} repo="work-day-scheduler" desc="Scheduling utility enabling recording of hourly tasks for a day" />
          <Project key={6} repo="readme-maker" desc="Uses NodeJS to create README.md from input obtained from dialog with user" />
        </div>
      </div>
    );
  }
  