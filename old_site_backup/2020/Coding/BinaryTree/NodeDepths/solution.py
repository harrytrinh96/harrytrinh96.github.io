# This is the class of the input binary tree.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


## Iterative Approach using Stack
## O(N) time | O(h) space h=height (depth)
def nodeDepths(root, depth = 0 ):
    # Write your code here.
    sumOfDepths = 0
    stack = [{"node":root, "depth":0}]
    while len(stack) > 0:
        nodeInfo = stack.pop()
        node, depth = nodeInfo["node"], nodeInfo["depth"]
        if node is None:
            continue
        sumOfDepths += depth
        stack.append({"node":node.left, "depth": depth +1 })
        stack.append({"node":node.right, "depth": depth +1 })
    return sumOfDepths

## Recursive Approach
## O(N) time | O(h) space h=height
# def nodeDepths(root, depth = 0 ):
#     # Write your code here.
#     if root is None:
#         return 0
#     print(root.value)
#
#     return depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth+1)

root = BinaryTree(1)
root.left = BinaryTree(2)
root.left.left = BinaryTree(4)
root.left.left.left = BinaryTree(8)
root.left.left.right = BinaryTree(9)
root.left.right = BinaryTree(5)
root.right = BinaryTree(3)
root.right.left = BinaryTree(6)
root.right.right = BinaryTree(7)

print(nodeDepths(root))
##16
