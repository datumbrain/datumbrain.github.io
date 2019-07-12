import React from "react";

const renderMockups = () => {
  let mockups = [];
  let items = [
    { class: "tablet ipad landscape", img: "tablet/1.png", button: "button" },
    { class: "iphone light phone-big", img: "app/4.png", button: "notch" },
    { class: "iphone light phone-small", img: "app/2.png", button: "notch" },
    { class: "tablet ipad portrait", img: "tablet/2.png", button: "button" }
  ];

  items.forEach((mockup, i) => {
    mockups.push(
      <div className={mockup.class} key={i}>
        <div className="screen">
          <img src={require(`assets/img/screens/${mockup.img}`)} alt="..." />
        </div>
        <div className={mockup.button} />
      </div>
    );
  });

  return mockups;
};

const IsometricMockups = () => {
  return <section className="isometric-mockups">{renderMockups()}</section>;
};

export default IsometricMockups;
