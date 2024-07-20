// src/App.js

import React from 'react';
import './App.css';
import NavBar from './NavBar';
import MainContent from './MainContent';
import TrustedCompanies from './TrustedCompanies';
import TeamSection from './TeamSection';
import TeamTimeSection from './TeamTimeSection';
import WebInterfaceSection from './WebInterfaceSection';
import ToolsControlSection from './ToolsControlSection';
import ManagementSection from './ManagementSection';
import GraphSection from './GraphSection';
import ControlFlowSection from './ControlFlowSection';
import TestimonialsSection from './TestimonialsSection';
import TeamProjectsSection from './TeamProjectsSection';
import Footer from './Footer'; // Add this import statement

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      <TrustedCompanies />
      <TeamSection />
      <TeamTimeSection />
      <WebInterfaceSection />
      <ToolsControlSection />
      <ManagementSection />
      <GraphSection />
      <ControlFlowSection />
      <TestimonialsSection />
      <TeamProjectsSection />
      <Footer /> {/* Use the component here */}
    </div>
  );
}

export default App;
