import React from "react";

export default function States() {
  const stats = [
    ["30+", "Years Legacy"],
    ["500+", "Products"],
    ["40+", "Countries Served"],
    ["IEC", "Export Licensed"],
    ["5000+", "Women Artisans"],
  ];

  return (
    <>
    <section className="stats">
      {stats.map((item, index) => (
        <div className="stat" key={index}>
          <h2>{item[0]}</h2> 
          <span>{item[1]}</span>
        </div>
      ))}
    </section>
    <div className="banner">
        
    </div>
    </>
  );
}

