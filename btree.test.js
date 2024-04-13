const BTree = require('./btree');

test('Should insert nodes correctly in a btree', () => {
    const tree = new BTree()
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)
    tree.insert(6)

    expect(tree.root.value).toBe(10);
    expect(tree.root.leftChild.value).toBe(5);
    expect(tree.root.rigthChild.value).toBe(15);
    expect(tree.root.leftChild.rigthChild.value).toBe(6);
});