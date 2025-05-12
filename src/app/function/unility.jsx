import React from "react";
import Image from "next/image";

export const GridSection = (
  grid_cols,
  width,
  data,
  title,
  img_class,
  grid_class,
) => (
  <div className="flex flex-col items-center justify-center mb-[5em]">
    {title === "" ? null : (
      <h2 className="mt-[3em] mb-[1.5em] md:text-4xl text-2xl">{title}</h2>
    )}
    <div className={`grid grid-cols-${grid_cols} w-${width} ${grid_class}`}>
      {data.map((item, index) => (
        <Image
          src={item.src}
          width={512}
          height={512}
          alt="work"
          key={index}
          className={"h-full object-cover overflow-hidden " + img_class}
        />
      ))}
    </div>
  </div>
);
