function createXmasTree(height: number, ornament: string): string {
  const treeWidth = 2 * (height - 1) + 1;
  const tree: string[] = [];

  const getEmptySpace = (width: number): string =>
    "_".repeat((treeWidth - width) >> 1);

  const bottom = getEmptySpace(1) + "#" + getEmptySpace(1);

  for (let i = 0; i < height; i++) {
    const branchWidht = 2 * i + 1;

    const emptySpace = getEmptySpace(branchWidht);
    const branch = ornament.repeat(branchWidht);
    tree.push(emptySpace + branch + emptySpace);
  }

  tree.push(bottom);
  tree.push(bottom);

  return tree.join("\n");
}

console.log(createXmasTree(6, "@"));
