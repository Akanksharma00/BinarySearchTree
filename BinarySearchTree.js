class Node{
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        }else{
            const searchTree = (node)=>{
                if(data<node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if(node.left !== null){
                        return searchTree(node.left);
                    }
                }else{
                    if(data>node.right){
                        if(node.right === null){
                            node.right = new Node(data);
                            return;
                        }else if(node.right !== null){
                            return searchTree(node.right);
                        }
                    }
                }
            };
            return searchTree(node);
        }
    }

    search(data){
        let curr = this.root;
        while(curr.data !== data){
            if(data < curr.data){
                curr = curr.left;
            }else{
                curr = curr.right;
            }
            if(curr === null){
                return null;
            }
        }
        return curr;
    }
}

const bst = new BST();
bst.insert(5);
bst.insert(2);
bst.insert(3);
bst.insert(10);
bst.insert(15);
bst.search(2);