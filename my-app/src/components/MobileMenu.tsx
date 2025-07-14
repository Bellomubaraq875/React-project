import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Content */}
      <div className="relative z-50 bg-black text-white p-6 space-y-6">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-3"
            onClick={onClose}>
            <div className="h-9 w-9 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center">
              <svg
                className="h-5 w-5 text-white"
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
            </div>
            <span className="text-lg font-semibold">Safe Report</span>
          </Link>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-red-500">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col space-y-4 text-base">
          <Link href="/submit-report" onClick={onClose}>
            Submit Report
          </Link>
          <Link href="/track-report" onClick={onClose}>
            Track Report
          </Link>
          <Link href="/how-it-works" onClick={onClose}>
            How it Works
          </Link>
          <Link href="/resources" onClick={onClose}>
            Resources
          </Link>
          <Link href="/contact" onClick={onClose}>
            Contact
          </Link>
        </nav>

        {/* Emergency Button */}
        <button className="w-full mt-6 flex h-10 items-center justify-center gap-2 rounded-full bg-red-500/10 px-6 font-medium text-red-500 ring-1 ring-red-500/20 hover:bg-red-500/40">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span>Emergency: 809</span>
        </button>
      </div>
    </div>
  );
}
