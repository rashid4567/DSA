class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
  startWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
  autocomplete(prefix) {
    const result = [];
    let node = this.root;

    for (let char of prefix) {
      if (!node.children[char]) return result;
      node = node.children[char];
    }
    const dfs = (currentNode, path) => {
      if (currentNode.isEndOfWord) {
        result.push(path);
      }
      for (let char in currentNode.children) {
        dfs(currentNode.children[char], path + char);
      }
    };
    dfs(node, prefix);
    return result;
  }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apex");
trie.insert("bat");

console.log(trie.autocomplete("ap"));
console.log(trie.autocomplete("b"));
console.log(trie.autocomplete("z"));
  