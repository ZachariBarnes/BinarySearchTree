export function findClosestValueInBst(tree /*BST Class*/, target /*number*/, closestValue = Number.MAX_VALUE ) {
	let absDiff = Math.abs(closestValue - target);
	let newAbsDiff = Math.abs(tree.value - target);
	closestValue = newAbsDiff < absDiff ? tree.value : closestValue;
	let newNode = target < tree.value ? tree.left : tree.right;
	if(newNode == null)
		return closestValue;
	return findClosestValueInBst(newNode, target, closestValue);	
}
