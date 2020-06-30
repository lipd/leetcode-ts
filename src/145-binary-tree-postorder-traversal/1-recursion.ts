// 递归法

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = (val === undefined ? 0 : val);
//     this.left = (left === undefined ? null : left);
//     this.right = (right === undefined ? null : right);
//   }
// }

function postorderTraversal(root: TreeNode | null): number[] {
  const path: number[] = [];
  const traversal = (node: TreeNode | null) => {
    if (node) {
      traversal(node.left);
      traversal(node.right);
      path.push(node.val);
    }
  };
  root && traversal(root);
  return path;
}
