import { ReportWizard } from "@/components/report/ReportWizard";
import Link from "next/link";

export default function SubmitReport() {
    return (
        <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
            {/* gradient bg */}
            <div className="fixed inset-0 -z-10 min-h-screen">
                <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center, rgba(56, 189, 248, 0.03), transparent_50%)]" />
                <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center, rgba(14, 165, 233, 0.05), transparent_70%)]" />
            </div>

            <main className="relative px-6 pt-32">
                <div className="mx-auto max-w-3xl">
                    <div className="flex flex-col items-center text-center">
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
                            Submit an Incident Report
                        </div>
                        <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-6xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent">
                            Submit Anonymous Report
                        </h1>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                            Your safety is our priority. All submissions are encrypted and
                            anonymized.
                        </p>
                    </div>
                    <div className="mt-16 bg-zinc-900/50 rounded-2xl border-white/50 p-6 text-white">
                        {/* Report wizard */}
                        <ReportWizard />
                    </div>
                </div>
            </main>
        </div>
    );
}
