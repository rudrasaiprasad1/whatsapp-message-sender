"use client";
/* ------------------ Helpers ------------------ */

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="card-whatsapp p-6 flex items-center gap-4">
      {icon}
      <div>
        <p className="text-sm text-[--color-text-secondary]">
          {label}
        </p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function TableRow({
  name,
  phone,
  time,
  status,
}: {
  name: string;
  phone: string;
  time: string;
  status: "Sent" | "Pending";
}) {
  return (
    <tr className="border-b border-whatsapp">
      <td className="py-3">{name}</td>
      <td>{phone}</td>
      <td>{time}</td>
      <td
        className={`font-medium ${
          status === "Sent"
            ? "text-green-600"
            : "text-yellow-600"
        }`}
      >
        {status}
      </td>
    </tr>
  );
}

export { StatCard, TableRow };