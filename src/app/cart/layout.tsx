export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative py-20">
      <div className="mx-auto w-full px-4 md:px-5 lg:px-6">
        <h2 className="title font-manrope mb-8 text-center text-4xl font-bold leading-10 text-black">
          سلة التسوق
        </h2>
        {children}
      </div>
    </section>
  );
}
