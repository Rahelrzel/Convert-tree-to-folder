"use client";

import React from "react";

import { Node } from "../types/node";
import FolderTree from "@/comp/folderTree";

const Home = () => {
  const data: Node[] = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      children: [
        {
          id: 2,
          name: "Jane Smith",
          role: "CTO",
          children: [
            {
              id: 3,
              name: "Jim Brown",
              role: "Tech Lead",
              children: [
                { id: 4, name: "Alice Green", role: "Frontend Developer" },
                { id: 5, name: "Bob White", role: "Backend Developer" },
              ],
            },
            { id: 6, name: "Charlie Black", role: "DevOps Engineer" },
          ],
        },
        {
          id: 7,
          name: "Diana Gray",
          role: "CFO",
          children: [
            { id: 8, name: "Eve Blue", role: "Chef Accountant" },
            { id: 9, name: "Frank Red", role: "Financial Analyst" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Organization Structure</h1>
      <FolderTree data={data} />
    </div>
  );
};

export default Home;
