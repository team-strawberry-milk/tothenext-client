export const metadata = {
  title: "To The Next",
  description: "학교에서 취업까지, 모든 순간 함께하는 맞춤형 서포터",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
