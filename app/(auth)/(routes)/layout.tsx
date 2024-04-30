import Nav from "@/app/components/common/nav";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-screen bg-primary-200 ">
      <div className="flex items-center mt-2 mb-5">
        <img
          src="/android-chrome-192x192.png"
          alt=""
          width={128}
          height={128}
        />
      </div>
      {children}
    </section>
  );
}
