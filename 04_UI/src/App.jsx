import Section1 from "./componants/Section1";

function App() {
  const cardData = [
    {
      number: 1,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description:
        "Prime customers that have access to bank credit and are satisfied with the current product",
      label: "Satisfied",
    },

    {
      number: 2,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      description:
        "Prime customers that have access to bank credit and are not satisfied with the current service",
      label: "Underserved",
    },

    {
      number: 3,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description:
        "Customers from near-prime and sub-prime segments with no access to bank credit",
      label: "Underbanked",
    },
  ];

  return <Section1 cardData={cardData} />;
}

export default App;
