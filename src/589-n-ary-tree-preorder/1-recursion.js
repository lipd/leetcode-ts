// 递归法

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = function(root) {
  const path = [];
  const traversal = (node) => {
    path.push(node.val);
    if (node) {
      node.children.forEach(child => traversal(child));
    }
  }
  root && traversal(root);
  return path
};