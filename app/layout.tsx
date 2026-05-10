import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduPrompt Multilingual Support — Build Classroom-Ready ELL Supports",
  description:
    "Create WIDA-aligned language objectives, vocabulary supports, sentence frames, chunked directions, and scaffolded activities for multilingual learners in minutes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <style>{`
          *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background: #ffffff;
            color: #0d1f3c;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          a {
            text-decoration: none;
            color: inherit;
          }

          button,
          select,
          input,
          textarea {
            font-family: 'Plus Jakarta Sans', sans-serif;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes shimmerPulse {
            0%, 100% {
              opacity: 0.7;
            }
            50% {
              opacity: 1;
            }
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-up {
            animation: fadeUp 0.6s ease both;
          }

          .fade-up-1 {
            animation: fadeUp 0.6s 0.1s ease both;
          }

          .fade-up-2 {
            animation: fadeUp 0.6s 0.2s ease both;
          }

          .fade-up-3 {
            animation: fadeUp 0.6s 0.32s ease both;
          }

          .fade-up-4 {
            animation: fadeUp 0.6s 0.44s ease both;
          }

          ::-webkit-scrollbar {
            width: 6px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f5f9;
          }

          ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 3px;
          }
        `}</style>
      </head>

      <body>{children}</body>
    </html>
  );
}
