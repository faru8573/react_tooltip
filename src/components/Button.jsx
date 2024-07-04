import React, { useState } from "react";

const Button = ({ position = "top" }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  function getCss(position) {
    switch (position) {
      case "top":
        return `bottom-full`;
      case "bottom":
        return `top-full`;
      case "left":
        return `right-full`;
      case "right":
        return `left-full`;

      default:
        return position;
    }
  }

  return (
    <div className="relative border rounded-md">
      {showToolTip && (
        <div
          className={`bg-black text-white p-2 rounded-md absolute ${getCss(
            position
          )}  mb-2`}
        >
          Thanks for hovering! I'm a tooltip
        </div>
      )}
      <button
        onMouseEnter={(e) => setShowToolTip(true)}
        onMouseLeave={(e) => setShowToolTip(false)}
        className="bg-yellow-500 p-2 rounded-md font-semibold m-2"
      >
        Hover over me!
      </button>
    </div>
  );
};

export default Button;
