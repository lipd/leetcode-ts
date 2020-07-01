// 递归法

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder = function(root) {
  const path = [];
  const traversal = (node) => {
    if (node) {
      node.children.forEach(child => traversal(child));
      path.push(node.val);
    }
  }
  root && traversal(root);
  return path
};