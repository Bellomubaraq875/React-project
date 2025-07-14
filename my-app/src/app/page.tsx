import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <main className="relative px-6 pt-32 pb-20 min-h-screen transition-colors duration-500">
        <div className="mx-auto max-w-5xl">
          {/* Hero section */}
          <div className="flex flex-col items-center text-center">
            {/* Icon Badge */}
            <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-sky-400">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Emergency Reporting
            </div>

            {/* Main Heading */}
            <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-6xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent">
              Report Incident
              <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Protect Identity
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
              A secure, anonymous platform to report emergencies. Stay safe and
              make your voice heard without risking your identity.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="./submit-report-page/page.tsx">
                <button className="group relative flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-800 px-8 text-sm font-medium text-white transition-all hover:bg-sky-500">
                  Make a report
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </Link>
              <Link href="/how-it-works">
                <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-green-800 px-8 text-sm font-medium text-white transition-all hover:bg-green-500">
                  How it works
                </button>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="mt-40 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Military-Grade Encryption",
                description:
                  "Your identity is protected with state-of-the-art encryption process",
                icon: (
                  <svg
                    className="h-6 w-6 text-sky-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Real-time Processing",
                description:
                  "Instant verification and secure routing of all report processes",
                icon: (
                  <svg
                    className="h-6 w-6 text-sky-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m4 0h-1v4h-1m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Secured Communication",
                description: "Two-way anonymous channel with law enforcement",
                icon: (
                  <svg
                    className="h-6 w-6 text-sky-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-5 inline-flex rounded-xl bg-sky-500/10 p-3">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* stats section */}
          <div className="mt-20 rounded-2xl bg-zinc-900 p-8">
            <div className="grid gap-8 sm:grid-cols-3 text-center">
              {[
                {
                  value: "100k+",
                  label: "Reports filed",
                  icon: (
                    <svg
                      className="mx-auto mb-2 h-8 w-8 text-sky-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17v-6h6v6m-6 0v-6a6 6 0 1112 0v6a6 6 0 11-12 0z"
                      />
                    </svg>
                  ),
                },
                {
                  value: "100%",
                  label: "Anonymity rate",
                  icon: (
                    <svg
                      className="mx-auto mb-2 h-8 w-8 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ),
                },
                {
                  value: "24/7",
                  label: "Support Available",
                  icon: (
                    <svg
                      className="mx-auto mb-2 h-8 w-8 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="transition hover:scale-105 duration-300">
                  {stat.icon}
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trusted Banner */}
          <div className="mt-40 mb-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Trusted by Law Enforcement Nationwide
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
