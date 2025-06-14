import React from "react";

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function createExampleTree() {
  let root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(15);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(7);
  return root;
}

function inorderTraversal(root, arr = []) {
  if (root == null) return arr;

  inorderTraversal(root.left, arr);
  arr.push(root.data);
  inorderTraversal(root.right, arr);

  return arr;
}

export default function TreeView() {
  const root = createExampleTree();
  const values = inorderTraversal(root);

  return (
    <div>
      <h2>Binary Tree</h2>
      <p>Inorder traversal: {values.join(", ")}</p>
    </div>
  );
}
