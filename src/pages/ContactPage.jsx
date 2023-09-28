import ContactForm from '../components/ContactForm';

// This is a static page mocking an "About Us" section for our fake user data
export default function ContactPage() {
    return (
      <div className="container pt-4">
        <h2>Contact Me</h2>
        <ContactForm />
      </div>
    );
  }
  