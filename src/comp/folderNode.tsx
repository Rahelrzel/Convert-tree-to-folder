"use client";

import { Node } from "../types/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import FolderTree from "./folderTree";
import { Card, Flex } from "@mantine/core";
import { useState } from "react";

interface FolderNodeProps {
  node: Node;
}

const FolderNode = ({ node }: FolderNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-2">
      <Card
        onClick={toggleOpen}
        className="flex items-center justify-between w-full px-4 py-2 bg-green-600 text-white rounded-lg cursor-pointer"
      >
        <div className="flex flex-col">
          <div>{node.name}</div>
          <div className="text-sm text-gray-200">{node.role}</div>
        </div>
        {node.children && (
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        )}
      </Card>
      {isOpen && node.children && <FolderTree data={node.children} />}
    </div>
  );
};

export default FolderNode;
