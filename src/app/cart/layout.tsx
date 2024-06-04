export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="py-20 relative">
      <div className="w-full px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          سلة التسوق
        </h2>
        {children}
        <div
          dir="rtl"
          className="lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto"
        >
          <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
            السعر النهائي
          </h5>
          <h6 className="text-center md:text-right font-manrope font-bold text-3xl lead-10 text-indigo-600">
            IQD 2,000
          </h6>
        </div>
        <div className="max-lg:max-w-lg max-lg:mx-auto">
          <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
            سيتم اضافة رسوم التوصيل في مرحلة تثبيت الطلب
          </p>
          <button className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700">
            اكمال الشراء
          </button>
        </div>
      </div>
    </section>
  );
}
