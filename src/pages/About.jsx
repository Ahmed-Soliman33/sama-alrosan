import HeroSection from "@components/common/HeroSection";
import heroVideo from "@assets/videos/about/about-hero.webm";
import SEOHelmet from "@components/common/SEOHelmet";

const BOXES = [
  {
    title: "الهدف",
    subtitles: ["تيســـــــــــــــــــــــــــــــير", "تملك الأراضي"],
  },
  {
    title: "الرؤية",
    subtitles: ["مـــــــــــدن نابضة", "بالحيــــــــــــــــــــــــاة"],
  },
  {
    title: "الرسالة",
    subtitles: ["حلــــــــــــــــــــــــــــــــول", "عقارية موثوقة"],
  },
];

const About = () => {
  return (
    <>
      <SEOHelmet
        title="من نحن - سما الروسان العقارية"
        description="تعرف على تاريخ وقصة نجاح سما الروسان العقارية، الشركة الرائدة في التطوير العقاري بالمملكة العربية السعودية منذ أكثر من أربعة عقود."
        keywords="من نحن، سما الروسان، تاريخ الشركة، التطوير العقاري، خبرة عقارية، السعودية"
      />
      <HeroSection video={heroVideo} overlay={false}>
        <h1 className="sr-only">من نحن</h1>
      </HeroSection>

      <section className="min-h-screen px-5 py-16 sm:px-6 md:py-24 lg:px-20 lg:py-32 xl:px-28">
        <div className="mx-auto space-y-3 text-center">
          <h2 className="text-[1.7rem] font-bold sm:pt-3 sm:text-3xl md:pt-5 xl:pt-8 xl:text-5xl">
            سما الروسان شركة عقارية تقدّم مخططات سكنية وتجارية مختارة بعناية، مع
            بنية تحتية مكتملة وخطوات تملك سهلة.
          </h2>
          <p className="text-primaryTextColor/90 text-[1.1rem] sm:pt-2 sm:text-[1.4rem] xl:text-3xl">
            نركّز على المواقع الواعدة، الشفافية في الطرح، وخدمة تساعدك من أول
            اتصال حتى استلام أرضك بثقة.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
          {BOXES.map(({ title, subtitles }, index) => (
            <div
              key={index}
              className="bg-primaryTextColor text-secondaryTextColor relative my-8 text-center"
            >
              <h3 className="px-6 text-[2.1rem] font-bold sm:pt-3 sm:text-4xl md:pt-5 xl:pt-8 xl:text-5xl">
                {title}
              </h3>
              <div className="absolute left-0 w-full border-b-[6px] border-white"></div>
              <ul className="mt-2 space-y-1 px-3 py-10">
                {subtitles.map((subtitle, subIndex) => (
                  <li
                    key={subIndex}
                    className={`${subIndex === 0 ? "text-secondaryColor" : "text-secondaryTextColor"} text-[2.1rem] font-bold sm:pt-3 sm:text-4xl md:pt-5 xl:pt-8 xl:text-5xl`}
                  >
                    {subtitle}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
