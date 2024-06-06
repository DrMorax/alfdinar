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
      </div>
    </section>
  );
}
