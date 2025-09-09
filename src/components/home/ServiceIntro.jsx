import React from "react";

const ServiceIntro = () => {
  return (
    <section className="relative h-[60vh] w-full">
      <div className="bg-tertiaryColor absolute top-1/2 left-1/2 h-[15rem] w-full -translate-x-1/2 -translate-y-1/2">
        <div className="text-primaryTextColor absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="mb-2 flex items-center justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45.037"
              height="45.037"
              viewBox="0 0 64.037 64.037"
            >
              <rect
                id="Rectangle_142"
                data-name="Rectangle 142"
                width="45.281"
                height="45.281"
                transform="translate(32.018) rotate(45)"
                fill="#d3a851"
              />
            </svg>
            <h1 className="self-end pt-8 font-bold xl:text-5xl">
              مخططات سكنية مختارة
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45.037"
              height="45.037"
              viewBox="0 0 64.037 64.037"
            >
              <rect
                id="Rectangle_142"
                data-name="Rectangle 142"
                width="45.281"
                height="45.281"
                transform="translate(32.018) rotate(45)"
                fill="#d3a851"
              />
            </svg>
          </div>
          <p className="text-primaryTextColor/90 font-light xl:text-4xl">
            مساحات متنوعة وقرب خدمات لراحة يومك ومستقبلك
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
