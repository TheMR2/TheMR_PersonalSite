import React from "react";

const HorizontalScroll = () => {
  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            minWidth: "200px",
            height: "150px",
            backgroundColor: "#4A90E2",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            flexShrink: 0, // Prevents items from shrinking
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;