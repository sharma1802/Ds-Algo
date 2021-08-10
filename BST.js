class Node{
    constructor(data, left = null, right = null){
        this.left = left;
        this.right = right;
        this.data = data
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        }else{
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if(node.left === !null){
                        return searchTree(node.left)
                    }
                }else if( data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return
                    } else if(node.right !== null){
                        return searchTree(node.right);
                    }
                }else{
                    return null;
                }
            }
            return searchTree(node);
        }

    }

    findMax(){
        let current = this.root;
        if(current === null){
            return null
        }else{
            while(current.right !== null){
                current = current.right;
            }
        }
        return current.data;
    }

    findMin(){
        let current =  this.root;
        if(current === null){
            return null
        }else{
            while(current.left !== null){
                current = current.left
            }
        }
        return current.data;
    }

    isPresentInTree(data){
        let current = this.root;
        while(current){
            if(data === current.data){
                return true;
            }else{
                if(data < current.left){
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
        }
        return false;
    }
}
