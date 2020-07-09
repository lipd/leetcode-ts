// 递归法

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

function maxDepth(root: TreeNode | null): number {
  function recursion(node: TreeNode | null, deep: number): number {
    if (!node) return deep - 1;
    const deepL = recursion(node.left, deep + 1);
    const deepR = recursion(node.right, deep + 1);
    return deepL > deepR ? deepL : deepR;
  }
  return recursion(root, 1);
};