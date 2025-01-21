import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import ValueProposition from './components/ValueProposition';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import DevelopmentFeatures from './components/DevelopmentFeatures';
import BetterSolution from './components/BetterSolution';
import UpworkProfile from './components/UpworkProfile';
import MemberiumCertification from './components/MemberiumCertification';
import ScheduleConsultation from './components/ScheduleConsultation';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PostsList from './components/PostsList'; // Import new component
import CreatePost from './components/CreatePost'; // Import new component
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient'; // Path to your ApolloClient.js file

function App() {
  return (
    <ApolloProvider client={client}> {/* Wrap your app with ApolloProvider */}
      <div>
        <Navbar />
        <HeroSection />
        <PartnersSection />
        <ValueProposition />
        <FeaturesSection />
        <ServicesSection />
        <DevelopmentFeatures />
        <BetterSolution />
        <UpworkProfile />
        <MemberiumCertification />
        <ScheduleConsultation />
        <TestimonialsSection />
        <BlogSection />
        {/* <CreatePost /> {/* New component for creating posts */}
        {/* <PostsList /> New component for displaying posts  */}
        <ContactForm />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
