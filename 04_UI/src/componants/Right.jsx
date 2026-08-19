import Detail from "./Detail";

const Right = ({ cardData }) => {
  return (
    <div className="w-2/3 flex gap-4">
      {cardData.map((card) => (
        <Detail
          number={card.number}
          image={card.image}
          description={card.description}
          label={card.label}
        />
      ))}
    </div>
  );
};

export default Right;