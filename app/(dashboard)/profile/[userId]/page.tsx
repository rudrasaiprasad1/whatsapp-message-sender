"use client";

import {
  BadgeCheck,
  Calendar,
  Mail,
  Phone,
  ShieldCheck,
  ShieldAlert,
  FileText,
} from "lucide-react";

// interface ProfilePageProps {
//   params: {
//     userId: string;
//   };
// }

export default function ProfilePage(
    // { params }: ProfilePageProps
) {
//   const { userId } = params;

  // 👉 later replace this with API call using userId
  const user = {
    // id: userId || "user_12345",
    id: "user_12345",
    name: "Sai Prasad",
    email: "saiprasad@email.com",
    avatar: "/avatar.jpg",
    whatsappNumber: "+91 98765 43210",
    plan: "Plus Send",
    subscriptionEnds: "15 Feb 2026",
    apiTrial: true,
    verified: true,
    messagesUsed: 720,
    messageLimit: 1000,
    documents: {
      pan: true,
      aadhar: true,
    },
  };

  const remaining = user.messageLimit - user.messagesUsed;
  const usagePercent = (user.messagesUsed / user.messageLimit) * 100;

  return (
    <div className="min-h-screen bg-[--color-whatsapp-bg] p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-sm text-[--color-text-secondary]">
          User ID: {user.id}
        </p>
      </div>

      {/* Profile Card */}
      <div className="card-whatsapp p-6 flex flex-col md:flex-row gap-6 mb-10">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-whatsapp object-cover"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{user.name}</h2>

          <div className="mt-3 space-y-2 text-sm text-[--color-text-secondary]">
            <p className="flex items-center gap-2">
              <Mail size={16} /> {user.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> {user.whatsappNumber}
            </p>
          </div>
        </div>

        {/* Verification */}
        <div className="flex items-center gap-2">
          {user.verified ? (
            <span className="flex items-center gap-1 text-green-600 font-medium">
              <BadgeCheck size={18} /> Verified
            </span>
          ) : (
            <span className="flex items-center gap-1 text-yellow-600 font-medium">
              <ShieldAlert size={18} /> Pending Verification
            </span>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Subscription */}
        <div className="card-whatsapp p-6">
          <h3 className="font-semibold mb-4">Subscription</h3>
          <p className="text-lg font-bold text-[--color-whatsapp-green]">
            {user.plan}
          </p>
          <p className="flex items-center gap-2 text-sm mt-2">
            <Calendar size={16} />
            Ends on {user.subscriptionEnds}
          </p>
        </div>

        {/* WhatsApp API */}
        <div className="card-whatsapp p-6">
          <h3 className="font-semibold mb-4">WhatsApp API Status</h3>
          <p
            className={`font-medium ${
              user.apiTrial ? "text-yellow-600" : "text-green-600"
            }`}
          >
            {user.apiTrial ? "Free Trial Active" : "Paid & Active"}
          </p>
          <p className="text-sm text-[--color-text-secondary] mt-2">
            Trial allows limited messages
          </p>
        </div>

        {/* Message Usage */}
        <div className="card-whatsapp p-6">
          <h3 className="font-semibold mb-4">Message Usage</h3>

          <p className="text-sm mb-2">
            {user.messagesUsed} / {user.messageLimit} used
          </p>

          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[--color-whatsapp-green]"
              style={{ width: `${usagePercent}%` }}
            />
          </div>

          <p className="text-sm mt-2 text-[--color-text-secondary]">
            {remaining} messages remaining
          </p>
        </div>
      </div>

      {/* Documents */}
      <div className="card-whatsapp p-6 mt-10">
        <h3 className="font-semibold mb-4">Submitted Documents</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <DocumentCard name="PAN Card" submitted={user.documents.pan} />
          <DocumentCard name="Aadhaar Card" submitted={user.documents.aadhar} />
        </div>
      </div>
    </div>
  );
}

/* ---------------- Helpers ---------------- */

function DocumentCard({
  name,
  submitted,
}: {
  name: string;
  submitted: boolean;
}) {
  return (
    <div className="border border-whatsapp rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <FileText />
        <span>{name}</span>
      </div>

      {submitted ? (
        <span className="flex items-center gap-1 text-green-600 font-medium">
          <ShieldCheck size={16} /> Submitted
        </span>
      ) : (
        <span className="text-yellow-600 font-medium">Pending</span>
      )}
    </div>
  );
}
