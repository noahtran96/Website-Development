"use client";

import Link from "next/link";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_ACCOUNT_INFO = gql`
  query GetAccountInfo {
    getAccountInfo {
      name
      accountNumber
      balance
      bankNam
    }
  }
`;

export default function DashboardPage() {
  const { loading, error, data } = useQuery(GET_ACCOUNT_INFO);

  if (loading)
    return (
      <div className="p-6 text-center text-gray-500">
        Loading account details...
      </div>
    );

  if (error)
    return (
      <div className="p-6 text-center text-red-500">
        BFF connection error: {error.message}
      </div>
    );

  const account = data.getAccountInfo;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Welcome header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Hi, {account.name}!
            </h1>
            <p className="text-sm text-gray-500">
              Welcome back to Noah Fakecombank.
            </p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
            Online
          </span>
        </div>

        {/* Virtual ATM card */}
        <div className="relative w-full max-w-md h-56 bg-gradient-to-br from-gray-950 via-slate-900 to-violet-955 rounded-2xl p-6 text-white shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          {/* ATM chip */}
          <div className="absolute top-6 right-6 w-12 h-10 bg-yellow-400 opacity-80 rounded-md border border-yellow-200" />
          <div className="h-full flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-75">
                {account.bankName}
              </p>
              <h2 className="text-3xl font-extrabold mt-4">
                {account.balance.toLocaleString("vi-VN")}{" "}
                <span className="text-lg font-normal">VND</span>
              </h2>
            </div>
            <div>
              <p className="text-sm opacity-75">Account number</p>
              <p className="text-xl font-mono tracking-widest mt-1">
                {account.accountNumber}
              </p>
            </div>
          </div>
        </div>

        {/* Quick access buttons */}
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <Link
            href="/dashboard/transfer"
            className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-2xl hover:border-violet-500 hover:shadow-md transition-all group"
          >
            <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
              💸
            </span>
            <span className="text-sm font-semibold text-gray-700">
              Transfer
            </span>
          </Link>

          <Link
            href="/dashboard/history"
            className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-2xl hover:border-violet-500 hover:shadow-md trasition-all group"
          >
            <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
              📜
            </span>
            <span className="text-sm font-semibold text-gray-700">
              Transaction history
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
