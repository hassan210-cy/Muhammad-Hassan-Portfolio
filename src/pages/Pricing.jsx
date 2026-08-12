import { useEffect } from 'react';
import PricingHero from '../sections/pricing/PricingHero.jsx';
import Tiers from '../sections/pricing/Tiers.jsx';
import AddOns from '../sections/pricing/AddOns.jsx';
import Process from '../sections/pricing/Process.jsx';
import Faq from '../sections/pricing/Faq.jsx';
import PricingCta from '../sections/pricing/PricingCta.jsx';

export default function Pricing() {
  // Start at the top when arriving on this page (React Router doesn't do
  // this automatically on navigation, unlike a normal multi-page site).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PricingHero />
      <Tiers />
      <AddOns />
      <Process />
      <Faq />
      <PricingCta />
    </>
  );
}
