# This is the class of the input root. Do not edit it.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
## O(N) time | O(N) space (because return haft of the leaf nodes, thereforem 1/2N  => N)
def branchSums(root):
    # Write your code here.
    sums = []
	calculateBranchSums(root, 0, sums)
	return sums

def calculateBranchSums(node, runningSum, sums):
	if node is None:
		return
	newRunningSum = runningSum + node.value
	## if a leaf node, we gonna add sum into sums[]
	if node.left is None and node.right is None:
		sums.append(newRunningSum)
		return 
	# if not a leaf node, we continue to sum child nodes 
	calculateBranchSums(node.left, newRunningSum, sums)
	calculateBranchSums(node.right, newRunningSum, sums)
