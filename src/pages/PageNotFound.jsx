import { Link } from "react-router-dom";
import SEOHelmet from "@components/common/SEOHelmet";

const PageNotFound = () => {
  return (
    <>
      <SEOHelmet
        title="الصفحة غير موجودة - سما الروسان العقارية"
        description="الصفحة التي تبحث عنها غير موجودة. ارجع إلى الصفحة الرئيسية لسما الروسان العقارية."
        keywords="صفحة غير موجودة، خطأ 404، سما الروسان"
      />
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-2xl">الصفحة غير موجودة</p>
        <Link to="/" className="text-secondaryColor mt-4 hover:underline">
          العودة للرئيسية
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
