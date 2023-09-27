import { Link } from 'react-router-dom';

export default function Project(props) {
    console.log('property props = ', props);
    const baseUrl = 'https://github.com/stevreut/';
    let fullUrl = baseUrl+props.repo;
    return (
        <div className="one-project">
            <p>{props.desc}</p>
            <p><Link to={fullUrl} target="_blank" rel="noopener noreferrer" >{props.repo}</Link></p>
        </div>
    );
  }
  