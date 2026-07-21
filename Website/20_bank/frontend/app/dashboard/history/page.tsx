"use client";

import Link from "next/link";
import { useQuery, gql } from "@apollo/client";

const GET_TRANSACTION_HISTORY = gql`
  query GetTransactionHistory {
    getTransactionHistory {
      id
      type
      amount
      content
      date
    }
  }
`;

export default function HistoryPage() {
  // Mock transaction history from Transaction Service on port 5003
  const [transactions] = useState([
    {
      id: "TX1001",
      type: "RECEIVED",
      amount: 2000000,
      content: "Monthly salary",
      date: "2026-07-15 10:30",
    },
    {
      id: "TX1002",
      type: "SENT",
      amount: 500000,
      content: "Dinner",
      date: "2026-07-15 19:15",
    },
    {
      id: "TX1003",
      type: "SENT",
      amount: 1500000,
      content: "Electricity",
      date: "2026-07-14 08:00",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Go back button */}
        <Link
          href="/dashboard"
          className="text-sm text-violet-600 hover:underline flex items-center gap-1"
        >
          ← Back to Dashboard
        </Link>
        <h1 className="text-xl font-bold text-gray-800">
          Transaction history 📜
        </h1>
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="divide-y divide-gray-100">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="p-4 flex justify-between items-center hover:bg-gray-55 transition-colors"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {transaction.content}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {transaction.date} • Transaction ID: {transaction.id}
                  </p>
                </div>
                <div
                  className={`font-bold text-lg ${transaction.type === "RECEIVED" ? "text-green-600" : "text-red-600"}`}
                >
                  {transaction.type === "RECEIVED" ? "+" : "-"}
                  {transaction.amount.toLocaleString("vi-VN")}đ
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
