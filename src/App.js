import React, { Suspense, lazy } from 'react';

const NavBar = lazy(() => import('./components/NavBar'));
const MainContent = lazy(() => import('./components/MainContent'));
const TrustedCompanies = lazy(() => import('./components/TrustedCompanies'));
const TeamSection = lazy(() => import('./components/TeamSection'));
const TeamTimeSection = lazy(() => import('./components/TeamTimeSection'));
const WebInterfaceSection = lazy(() => import('./components/WebInterfaceSection'));
const ToolsControlSection = lazy(() => import('./components/ToolsControlSection'));
const ManagementSection = lazy(() => import('./components/ManagementSection'));
const GraphSection = lazy(() => import('./components/GraphSection'));
const ControlFlowSection = lazy(() => import('./components/ControlFlowSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const TeamProjectsSection = lazy(() => import('./components/TeamProjectsSection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
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
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
