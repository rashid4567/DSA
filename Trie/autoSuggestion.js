class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        let node =this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode;
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }
     suggest(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char])return [];
            node = node.children[char]
        }
        
        const result = [];
        
        const dfs = (currentNode, path) =>{
            if(currentNode.isEndOfWord){
                result.push(path)
            }
            for(let n in currentNode.children){
                dfs(currentNode.children[n], path + n)
            }
        }
        dfs(node, prefix);
        return result;
    }
}


let trie = new Trie();
["apple","orange",'grape',"tomato","app","india","europe","russia"].forEach(x => trie.insert(x));
console.log(trie.suggest("ap"));
console.log(trie.suggest("o"));
console.log(trie.suggest("in"));
console.log(trie.suggest("e"));
console.log(trie.suggest("p"));
console.log(trie.suggest("r"));
