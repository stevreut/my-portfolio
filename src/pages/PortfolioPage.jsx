import Project from '../components/Project';

// This is a static page mocking an "Project" section for our fake user data
export default function PortfolioPage() {
    return (
      <div className="container pt-4">
        <h3>Portfolio Page - TODO</h3>
        <div className="projects-container">
          <Project key={1} repo="just-another-text-editor" desc="Demonstration minimal text editor based on PWA technology" />
          <Project key={2} repo="svg-maker" desc="Tool to enable persisted storage of notes on a server" />
          <Project key={3} repo="weather-dashboard" desc="Utility using third-party APIs to retrieve and display 5-day weather forecast information for a specified city" />
        </div>
      </div>
    );
  }
  