module.exports = class BTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        if (this.root == null) {
            this.root = new Node(value)
            return
        }
        this.insertNode(this.root, value)
    }

    insertNode(node, value) {
        if (value < node.value) {
            if (node.leftChild == null) {
                node.leftChild = new Node(value)
                return
            }
            this.insertNode(node.leftChild, value) 
        }
        if (value > node.value) {
            if (node.rigthChild == null) {
                node.rigthChild = new Node(value)
                return
            }
            this.insertNode(node.rigthChild, value) 
        }
    }
}

class Node {
    constructor(value) {
       this.value = value 
       this.leftChild = null
       this.rigthChild =  null
    }
}