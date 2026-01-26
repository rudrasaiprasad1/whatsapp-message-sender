"use client";
import { PricingPlans } from "@/components/PricingCards";
import { useRouter } from "next/navigation";

export default function HomePage() {
  
  const router = useRouter();

  const redirectToDashboardPage = () => {
    router.push("/dashboard")
  }
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-[#075E54] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white font-semibold text-lg">
          {/* WhatsApp SVG Logo */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path
              d="M21.9 18.9c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1-1.2-.4-2.3-1.4c-.8-.7-1.4-1.6-1.6-1.9s0-.4.1-.6c.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-.9-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.6 1.1 3 1.3 3.2c.1.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.3 1.6.2 2.2.1.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z"
              fill="white"
            />
          </svg>
          <span>Form2WhatsApp</span>
        </div>
        <nav className="space-x-6">
          <a href="#features" className="text-gray-200 hover:text-white">
            Features
          </a>
          <a href="#pricing" className="text-gray-200 hover:text-white">
            Pricing
          </a>
          <a href="#contact" className="text-gray-200 hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Send WhatsApp Messages{" "}
            <span className="text-[#25D366]">Automatically</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Collect leads using forms and instantly send WhatsApp messages using
            our simple SaaS platform. No coding required.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#25D366] hover:bg-green-500 text-white px-6 py-3 rounded-xl font-medium shadow" onClick={redirectToDashboardPage}>
              Get Started Free
            </button>
            <a href="#pricing" className="border border-[#25D366] text-[#25D366] px-6 py-3 rounded-xl font-medium" >
              View Demo
            </a>
          </div>
        </div>

        {/* Mock Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="bg-[#DCF8C6] rounded-xl p-4 mb-3 max-w-xs">
            <p className="text-sm">Hi 👋 Thanks for filling the form!</p>
          </div>
          <div className="bg-[#DCF8C6] rounded-xl p-4 max-w-xs ml-auto">
            <p className="text-sm">We’ll contact you shortly on WhatsApp ✅</p>
          </div>
        </div>
      </section>


      {/* Pricing Plans */}
      <PricingPlans />


      {/* Features */}
      <section id="features" className="bg-[#f7f9fb] py-16">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
          {["Form Integration", "Instant WhatsApp API", "Analytics & Logs"].map(
            (feature) => (
              <div
                key={feature}
                className="border rounded-2xl p-6 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                <p className="text-gray-600 text-sm">
                  Seamlessly manage WhatsApp automation with a clean and easy
                  dashboard.
                </p>
              </div>
            ),
          )}
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#075E54] text-gray-200 text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Form2WhatsApp. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
