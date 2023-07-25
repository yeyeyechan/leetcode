var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) {
    return null;
  }
  let root = new TreeNode(postorder[postorder.length - 1]);
  let midIndex = inorder.indexOf(root.val);

  let leftInorder = inorder.slice(0, midIndex);
  let rightInorder = inorder.slice(midIndex + 1);

  root.left = buildTree(leftInorder, postorder.slice(0, leftInorder.length));
  root.right = buildTree(
    rightInorder,
    postorder.slice(leftInorder.length, postorder.length - 1)
  );

  return root;
};
