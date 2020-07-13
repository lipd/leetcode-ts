// 广度优先法

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
  if (!root) return [];
  const visited: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    visited.push([]);
    [...queue].forEach(node => {
      queue.shift();
      visited[visited.length - 1].push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right)
    })
  }
  return visited
};