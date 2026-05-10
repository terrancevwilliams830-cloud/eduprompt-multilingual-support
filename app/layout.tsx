import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduPrompt Multilingual Support",
  description:
    "Create classroom-ready language objectives, vocabulary scaffolds, sentence frames, chunked directions, and multilingual learner supports.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
