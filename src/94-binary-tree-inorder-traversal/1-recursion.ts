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

function inorderTraversal(root: TreeNode | null): number[] {
  const traversePath: number[] = [];

  const traversal = (node: TreeNode | null): void => {
    if (node) {
      traversal(node.left);
      traversePath.push(node.val);
      traversal(node.right);
    }
  };

  root && traversal(root);

  return traversePath;
}
