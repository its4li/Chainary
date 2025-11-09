import { useState } from "react";
import { Folder, FileText } from "lucide-react";

const treeData = [
  {
    name: "contracts",
    type: "folder",
    children: [
      {
        name: "access",
        type: "folder",
        children: [
          { name: "Ownable.sol", type: "file" },
          { name: "Roles.sol", type: "file" },
        ],
      },
      {
        name: "token",
        type: "folder",
        children: [
          {
            name: "ERC20",
            type: "folder",
            children: [
              { name: "ERC20.sol", type: "file" },
              { name: "ERC20Burnable.sol", type: "file" },
              { name: "ERC20Capped.sol", type: "file" },
            ],
          },
          {
            name: "ERC721",
            type: "folder",
            children: [
              { name: "ERC721.sol", type: "file" },
              { name: "ERC721URIStorage.sol", type: "file" },
              { name: "ERC721Enumerable.sol", type: "file" },
            ],
          },
        ],
      },
      {
        name: "utils",
        type: "folder",
        children: [
          { name: "Math.sol", type: "file" },
          { name: "Strings.sol", type: "file" },
          { name: "Counters.sol", type: "file" },
        ],
      },
      {
        name: "governance",
        type: "folder",
        children: [
          { name: "Governor.sol", type: "file" },
          { name: "Timelock.sol", type: "file" },
        ],
      },
    ],
  },
  {
    name: "test",
    type: "folder",
    children: [
      { name: "ERC20.test.js", type: "file" },
    ],
  },
  {
    name: "scripts",
    type: "folder",
    children: [
      { name: "deploy.js", type: "file" },
    ],
  },
  { name: "package.json", type: "file" },
  { name: "hardhat.config.js", type: "file" },
  { name: "README.md", type: "file" },
];

function TreeNode({ node }) {
  const [open, setOpen] = useState(false);

  if (node.type === "folder") {
    return (
      <div className="ml-4">
        <div
          className="flex items-center cursor-pointer hover:text-[#A78BFA] py-1"
          onClick={() => setOpen((o) => !o)}
        >
          <Folder className="w-5 h-5 mr-2" />
          <span className="font-semibold">{node.name}</span>
        </div>
        {open && (
          <div className="ml-4 border-l border-[#231943]/40 pl-2">
            {node.children.map((child, idx) => (
              <TreeNode key={idx} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="flex items-center py-1 ml-8 hover:text-[#00E6A8] cursor-pointer">
      <FileText className="w-4 h-4 mr-2" />
      <span>{node.name}</span>
    </div>
  );
}

export default function FileTree() {
  return (
    <div className="bg-[#1A1033] rounded-xl p-6 text-sm font-mono text-gray-200 border border-[#231943]">
      <div className="font-bold mb-2 text-[#A78BFA]">chainary-contracts/</div>
      {treeData.map((node, idx) => (
        <TreeNode key={idx} node={node} />
      ))}
    </div>
  );
}
