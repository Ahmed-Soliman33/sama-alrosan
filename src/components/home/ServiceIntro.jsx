import Heading from "@components/common/Heading";
import useMediaQuery from "@hooks/useMediaQuery";

const ServiceIntro = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <section className="relative h-[40vh] w-full border-red-500 md:h-[50vh]">
      <div className="bg-tertiaryColor absolute top-1/2 left-1/2 h-[11rem] w-full -translate-x-1/2 -translate-y-1/2 md:h-[15rem]">
        <div className="text-primaryTextColor absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="mb-2 flex items-center justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={isTablet ? "35" : "45.037"}
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

            <Heading
              baseStyle={false}
              className="self-end pt-2 text-[1.4rem] font-bold sm:pt-3 sm:text-2xl md:pt-5 md:text-3xl lg:text-4xl xl:pt-8 xl:text-5xl"
            >
              مخططات سكنية مختارة
            </Heading>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={isTablet ? "35" : "45.037"}
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
          <p className="text-primaryTextColor/90 font-light sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
            مساحات متنوعة وقرب خدمات لراحة يومك ومستقبلك
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
