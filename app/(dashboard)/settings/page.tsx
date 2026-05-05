"use client";

import { useState } from "react";

type SettingsState = {
  businessName: string;
  whatsappNumber: string;
  apiKey: string;
  phoneNumberId: string;

  formWebhookUrl: string;
  nameField: string;
  phoneField: string;

  confirmationTemplate: string;
  language: string;

  sendInstantly: boolean;
  delayMinutes: number;
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsState>({
    businessName: "",
    whatsappNumber: "",
    apiKey: "",
    phoneNumberId: "",

    formWebhookUrl: "",
    nameField: "name",
    phoneField: "phone",

    confirmationTemplate:
      "Hi {{name}}, thank you for submitting the form. Your reference ID is {{order_id}}.",
    language: "en",

    sendInstantly: true,
    delayMinutes: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? !prev.sendInstantly : value,
    }));
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-2xl font-semibold text-[#075E54]">
        WhatsApp Settings
      </h1>

      {/* Account */}
      <Section title="Account">
        <Input
          name="businessName"
          placeholder="Business Name"
          value={settings.businessName}
          onChange={handleChange}
        />

        <Input
          name="whatsappNumber"
          placeholder="WhatsApp Business Number"
          value={settings.whatsappNumber}
          onChange={handleChange}
        />
      </Section>

      {/* API */}
      <Section title="WhatsApp API">
        <Input
          name="apiKey"
          placeholder="API Key"
          value={settings.apiKey}
          onChange={handleChange}
        />

        <Input
          name="phoneNumberId"
          placeholder="Phone Number ID"
          value={settings.phoneNumberId}
          onChange={handleChange}
        />
      </Section>

      {/* Form */}
      <Section title="Form Integration">
        <Input
          name="formWebhookUrl"
          placeholder="Form Webhook URL"
          value={settings.formWebhookUrl}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            name="nameField"
            placeholder="Name Field Key"
            value={settings.nameField}
            onChange={handleChange}
          />

          <Input
            name="phoneField"
            placeholder="Phone Field Key"
            value={settings.phoneField}
            onChange={handleChange}
          />
        </div>
      </Section>

      {/* Message */}
      <Section title="Confirmation Message">
        <select
          name="language"
          value={settings.language}
          onChange={handleChange}
          className="input"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="te">Telugu</option>
        </select>

        <textarea
          name="confirmationTemplate"
          rows={4}
          value={settings.confirmationTemplate}
          onChange={handleChange}
          className="input resize-none"
        />
      </Section>

      {/* Automation */}
      <Section title="Automation">
        <label className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={settings.sendInstantly}
            onChange={handleChange}
            className="accent-[#25D366]"
          />
          Send message instantly
        </label>

        {!settings.sendInstantly && (
          <Input
            type="number"
            name="delayMinutes"
            placeholder="Delay in minutes"
            value={settings.delayMinutes}
            onChange={handleChange}
          />
        )}
      </Section>

      <button
        className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#1DA851] transition"
      >
        Save Settings
      </button>
    </div>
  );
}

/* ---------------- Components ---------------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white w-full rounded-xl border border-gray-200 p-5 space-y-4">
      <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
      {children}
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="input"
    />
  );
}
