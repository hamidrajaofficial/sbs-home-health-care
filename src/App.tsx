import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Wrapper from './components/layout/Wrapper';
import ScrollToTop from './components/common/ScrollToTop';
import HomeHealthcareBilling from './pages/HomeHealthcareBilling';
import HomeHealthcareVirtualAssistant from './pages/HomeHealthcareVirtualAssistant';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomeHealthcareBilling />} />
          <Route path="/home-healthcare-billing-services" element={<HomeHealthcareBilling />} />
          <Route path="/home-healthcare-virtual-assistant-services" element={<HomeHealthcareVirtualAssistant />} />
          <Route path="/medical-billing-support" element={<Navigate to="/home-healthcare-billing-services" replace />} />
          <Route path="/medical-billing-services" element={<Navigate to="/home-healthcare-billing-services" replace />} />
          <Route path="*" element={<Navigate to="/home-healthcare-billing-services" replace />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}
