import { useState } from "react";

function Wheel({ categories, onSpin }) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  function handleSpin() {
    if (isSpinning) return;

    setIsSpinning(true);

    const extraRotation = Math.floor(Math.random() * 360);
    const newRotation = rotation + 1800 + extraRotation;

    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      onSpin();
    }, 3000);
  }

  return (
    <div className="wheel-container">
      <div
        className="wheel"
        style={{
          transform: `rotate(${rotation}deg)`
        }}
      >
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className={`category category-${index}`}
              title={category.name}
            >
              <Icon />
            </div>
          );
        })}
      </div>

      {/* Centro da roleta fica separado para não girar */}
      <div className="wheel-center">
        <div className="center-pointer"></div>

        <button
          className="spin-button"
          onClick={handleSpin}
          disabled={isSpinning}
        >
          {isSpinning ? "..." : "GIRAR"}
        </button>
      </div>
    </div>
  );
}

export default Wheel;