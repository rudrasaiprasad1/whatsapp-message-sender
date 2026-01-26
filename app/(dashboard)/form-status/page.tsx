"use client";

import {
  CheckCircle,
  Clock,
  FileText,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { StatCard, TableRow } from "./components/StatCard";

/* ------------------ Chart Data ------------------ */

const donutData = [
  { name: "Sent", value: 96 },
  { name: "Pending", value: 32 },
];

const barData = [
  { day: "Mon", sent: 12 },
  { day: "Tue", sent: 18 },
  { day: "Wed", sent: 10 },
  { day: "Thu", sent: 22 },
  { day: "Fri", sent: 16 },
];

const lineData = [
  { time: "10 AM", filled: 5 },
  { time: "11 AM", filled: 12 },
  { time: "12 PM", filled: 18 },
  { time: "1 PM", filled: 26 },
  { time: "2 PM", filled: 35 },
];

const COLORS = [
  "var(--color-whatsapp-green)",
  "#facc15",
];

export default function FormStatusPage() {
  const stats = {
    total: 128,
    sent: 96,
    pending: 32,
  };

  return (
    <div className="min-h-screen bg-[--color-whatsapp-bg] p-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Form Status</h1>
        <p className="text-[--color-text-secondary]">
          Track form submissions and WhatsApp delivery
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <StatCard
          icon={<FileText className="text-[--color-whatsapp-green]" />}
          label="Total Forms"
          value={stats.total}
        />
        <StatCard
          icon={<CheckCircle className="text-[--color-whatsapp-green]" />}
          label="WhatsApp Sent"
          value={stats.sent}
        />
        <StatCard
          icon={<Clock className="text-yellow-500" />}
          label="Pending"
          value={stats.pending}
        />
      </div>

      {/* Charts */}
      <div className="grid gap-8 lg:grid-cols-3 mb-12">
        {/* Donut */}
        <div className="card-whatsapp p-6">
          <h3 className="font-semibold mb-4">Sent vs Pending</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={donutData}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {donutData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar */}
        <div className="card-whatsapp p-6">
          <h3 className="font-semibold mb-4">Daily Message Volume</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="sent"
                fill="var(--color-whatsapp-green)"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line */}
        <div className="card-whatsapp p-6">
          <h3 className="font-semibold mb-4">Forms Filled Over Time</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="filled"
                stroke="var(--color-whatsapp-green)"
                strokeWidth={3}
                dot
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="card-whatsapp p-6">
        <h2 className="text-xl font-semibold mb-4">
          Recent Form Activity
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-whatsapp">
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Phone</th>
                <th className="text-left py-2">Submitted</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                name="Rahul Kumar"
                phone="+91 98765 43210"
                time="10 mins ago"
                status="Sent"
              />
              <TableRow
                name="Anita Sharma"
                phone="+91 91234 56789"
                time="30 mins ago"
                status="Pending"
              />
              <TableRow
                name="Suresh Patel"
                phone="+91 99887 66554"
                time="1 hour ago"
                status="Sent"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


