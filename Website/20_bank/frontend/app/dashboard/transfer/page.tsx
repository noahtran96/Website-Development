"use client";

import Link from "next/link";
import React, { useState } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/navigation";

export default function TransferPage() {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("Noah Tran made a transfer");

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    // POST API call to Transaction Service port 5003
    alert(
      `Sent transfer ${Number(amount).toLocaleString("vi-VN")}đ command to account number ${receiver}`,
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-6">
        {/* Go back button */}
        <Link
          href="/dashboard"
          className="text-sm text-violet-600 hover:underline flex items-center gap-1"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-xl font-bold text-gray-800">Quick transfer 💸</h1>
        <form onSubmit={handleTransfer} className="space-y-4">
          {/* Recipient account number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipient account number
            </label>
            <input
              onChange={(e) => setReceiver(e.target.value)}
              type="text"
              value={receiver}
              required
              placeholder="Enter recipient account number"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none"
            />
          </div>

          {/* Transfer amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transfer amount (VND)
            </label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              value={amount}
              required
              placeholder="Enter transfer amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none"
            />
          </div>

          {/* Transfer description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transfer description
            </label>
            <input
              onChange={(e) => setContent(e.target.value)}
              type="text"
              value={content}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-colors shadow-md"
          >
            Proceed transfer
          </button>
        </form>
      </div>
    </div>
  );
}
