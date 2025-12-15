class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfTheWord = false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfTheWord = true;
    }
    longestPrefix(word){
        let node = this.root;
        let prefix = "";
        let longest = "";

        for(let char of word){
            if(node.children[char]){
                prefix += char;
                node = node.children[char]
                if(node.isEndOfTheWord){
                    longest = prefix;
                }
            }else{
                break;
            }
        }
        return longest;
    }
}


const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("ape");

console.log(trie.longestPrefix("applause")); 
console.log(trie.longestPrefix("apex"));
console.log(trie.longestPrefix("ap"));    

