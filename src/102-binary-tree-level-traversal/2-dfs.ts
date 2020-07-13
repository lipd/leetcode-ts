// 深度优先法

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  const path: number[][] = [];
  function traversal(level: number, node: TreeNode | null) {
    if (node) {
      if (!path[level]) {
        path[level] = [node.val];
      } else {
        path[level].push(node.val);
      }
      traversal(level + 1, node.left);
      traversal(level + 1, node.right);
    }
  }
  traversal(0, root);
  return path;
};