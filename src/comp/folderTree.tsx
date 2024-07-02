"use client";
import React from "react";

import { Node } from "../types/node";
import FolderNode from "./folderNode";

interface FolderTreeProps {
  data: Node[];
}

const FolderTree = ({ data }: FolderTreeProps) => {
  return (
    <div className="pl-4">
      {data.map((item) => (
        <FolderNode key={item.id} node={item} />
      ))}
    </div>
  );
};

export default FolderTree;
