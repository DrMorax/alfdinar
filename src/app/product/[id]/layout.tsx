export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative" dir="rtl">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-0">
        <div className="mx-auto grid grid-cols-1 gap-16 max-md:px-2 lg:grid-cols-2">
          {children}
        </div>
      </div>
    </section>
  );
}
