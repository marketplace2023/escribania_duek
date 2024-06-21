import ShippingInfoOfferWidget from "./shipping-info-offer-widget";
import technology from "@/assets/technology.png";
import logistic from "@/assets/logistic.png";
import bigData from "@/assets/big_data.png";

const offerWidgetsInfo = [
  {
    title: "Tecnología",
    description:
      "Te invitamos a experimentar la logística a través de la tecnología.",
    image: technology,
    buttonText: "Solicitar envios",
  },
  {
    title: "Logistica & Fulfillment.",
    description: "Nos hacemos cargo de toda tu logística.",
    image: logistic,
    buttonText: "Ver más",
  },
  {
    title: "Big Data.",
    description:
      "Conocé mejor tu operación y utilizá tu logística como estrategia de marketing para aumentar tus ventas.",
    image: bigData,
    buttonText: "Ver más",
  },
];

const ShippingWhatWeOfferSection = () => {
  return (
    <div className="bg-primary text-white py-16">
      <div className="container">
        <h3 className="text-3xl font-semibold mb-3">¿Qué ofrecemos?</h3>
        <p>
          Te aportamos toda la información y las herramientas tecnológicas que
          necesitas para que tu operación sea más inteligente y escale al
          próximo nivel.
        </p>

        <div className="flex justify-between mt-10">
          {offerWidgetsInfo.map((info) => (
            <ShippingInfoOfferWidget
              key={info.title}
              title={info.title}
              description={info.description}
              image={info.image}
              buttonText={info.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingWhatWeOfferSection;
