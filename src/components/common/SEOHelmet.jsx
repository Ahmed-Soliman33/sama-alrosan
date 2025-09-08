import PropTypes from "prop-types";

const SEOHelmet = ({
  title = "سما الروسان العقارية",
  description = "Professional creative agency providing digital marketing, web development, and design services",
  keywords = "منذ أكثر من أربعة عقود، تقدم سما الروسان العقارية مشاريع عقارية متكاملة ترفع جودة الحياة وتلبي طموحات الأفراد والشركات والمستثمرين في المملكة العربية السعودية.",
  author = "سما الروسان العقارية",
  image = "/logo.webp",
  url = window.location.href,
  type = "website",
}) => {
  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />
    </>
  );
};

SEOHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
};

export default SEOHelmet;
