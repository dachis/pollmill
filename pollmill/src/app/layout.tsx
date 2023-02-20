import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <div className="w-full h-12 bg-gray-500 flex items-center pl-4 font-bold text-lg text-white rounded-b-xl">
          PollMill
        </div>
        {children}
      </body>
    </html>
  );
}
