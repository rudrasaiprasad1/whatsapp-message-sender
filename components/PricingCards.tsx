export const PricingPlans = () => {
  const plans = [
    {
      name: "Standard Send",
      price: "₹999 / month",
      description: "Best for small businesses & startups",
      features: [
        "Up to 1,000 messages",
        "Form to WhatsApp trigger",
        "Basic message templates",
        "Single WhatsApp number",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Plus Send",
      price: "₹2,499 / month",
      description: "Perfect for growing teams",
      features: [
        "Up to 5,000 messages",
        "Advanced form automation",
        "Custom message templates",
        "Multiple WhatsApp numbers",
        "Delivery reports",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Advance Send",
      price: "₹4,999 / month",
      description: "For high-volume & enterprise usage",
      features: [
        "Unlimited messages",
        "Full WhatsApp API access",
        "Template approval support",
        "Team & role management",
        "Analytics & logs",
        "Dedicated account manager",
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-[#f7f9fb] py-20 "
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent{" "}
            <span className="text-[#25D366]">Pricing</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose a plan that fits your WhatsApp messaging needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col transition-all
                ${plan.highlighted
                  ? "border-[#25D366] shadow-xl scale-105 bg-white"
                  : "border-gray-200 bg-white hover:shadow-lg"
                }
              `}
            >
              {/* Plan Name */}
              <h3 className="text-xl font-semibold mb-2">
                {plan.name}
              </h3>

              <p className="text-gray-500 text-sm mb-4">
                {plan.description}
              </p>

              {/* Price */}
              <div className="text-3xl font-bold mb-6">
                {plan.price}
              </div>

              {/* Features */}
              <ul className="space-y-3 text-sm text-gray-700 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-[#25D366]">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-8 py-3 rounded-xl font-medium transition
                  ${plan.highlighted
                    ? "bg-[#25D366] text-white hover:bg-green-500"
                    : "border border-[#25D366] text-[#25D366] hover:bg-green-50"
                  }
                `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
