"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS for styling

export default function Home() {
  const [user, setUser] = useState({ loggedIn: null });
  const [name, setName] = useState('');
  const [transactionStatus, setTransactionStatus] = useState(null);

  useEffect(() => {
    // Simulate user authentication status
    setUser({ loggedIn: true, addr: '0x12345678' });
  }, []);

  const sendQuery = async () => {
    // Simulate querying user profile
    setName('John Doe');
  };

  const executeTransaction = async () => {
    // Simulate executing a transaction
    setTransactionStatus('Transaction complete');
  };

  return (
    <div>
      <Head>
        <title>Cool Next.js App</title>
        <meta name="description" content="An awesome Next.js app!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav className="bg-blue-500 text-white p-4">
        {/* Add a navigation menu */}
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/transactions">Transactions</a></li>
        </ul>
      </nav>
      <h1 className="text-3xl mt-4">Cool Next.js App</h1>
      {user.loggedIn ? (
        <div className="mt-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <div className="text-lg font-semibold">Welcome, {name}</div>
            <div>Address: {user.addr}</div>
            <div>Transaction Status: {transactionStatus}</div>
            <div className="mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={sendQuery}
              >
                Send Query
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded ml-2"
                onClick={executeTransaction}
              >
                Execute Transaction
              </button>
            </div>
          </div>
          <button
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            onClick={() => setUser({ loggedIn: null })}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => setUser({ loggedIn: true, addr: '0x12345678' })}
          >
            Log In
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded ml-2"
            onClick={() => setUser({ loggedIn: true, addr: '0x12345678' })}
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}
