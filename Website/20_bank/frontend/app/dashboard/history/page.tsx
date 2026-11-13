"use client";

import Link from "next/link";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

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
  const { loading, error, data } = useQuery(GET_TRANSACTION_HISTORY);

  if (loading)
    return (
      <div className="p-6 text-center text-gray-500">
        Loading transaction history...
      </div>
    );
  if (error)
    return (
      <div className="p-6 text-center text-red-500">
        BFF connection error: {error.message}
      </div>
    );

  const transactions = data.getTransactionHistory;

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
            {transactions.length === 0 ? (
              <p className="p-4 text-center text-gray-400">
                No transaction recorded
              </p>
            ) : (
              transactions.map((transaction) => (
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
