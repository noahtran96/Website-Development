"use client";

import Link from "next/link";
import React, { useState } from "react";

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
        </form>
      </div>
    </div>
  );
}
