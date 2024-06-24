import ShippingHeroSection from "../components/shipping-hero-section";
import ShippingJourneySection from "../components/shipping-journey-section";
import ShippingWhatWeOfferSection from "../components/shipping-what-we-offer-section";
import ShippingContactUsSection from "../components/shipping-contact-us-section";

const ShippingInfo = () => {
  return (
    <>
      <ShippingHeroSection className="mt-10 mb-20" />

      <ShippingWhatWeOfferSection />

      <ShippingJourneySection />

      <ShippingContactUsSection />
    </>
  );
};

export default ShippingInfo;
