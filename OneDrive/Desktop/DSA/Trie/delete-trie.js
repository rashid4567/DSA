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

  delete(word) {
    const deleteHelper = (node, index) => {
      if (index === word.length) {
        if (!node.isEndOfWord) return false;
        node.isEndOfWord = false;
        return Object.keys(node.children).length === 0;
      }

      const char = word[index];
      if (!node.children[char]) return false;

      const shouldDeleteChild = deleteHelper(node.children[char], index + 1);

      if (shouldDeleteChild) {
        delete node.children[char];
        return Object.keys(node.children).length === 0 && !node.isEndOfWord;
      }

      return false;
    };

    return deleteHelper(this.root, 0);
  }

  suggest(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }

    const result = [];

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

let trie = new Trie();
[
  "apple",
  "orange",
  "grape",
  "tomato",
  "app",
  "india",
  "europe",
  "russia", 
].forEach((x) => trie.insert(x));

console.log("Before delete:", trie.suggest("a"));
trie.delete("apple");
console.log("After deleting 'apple':", trie.suggest("a"));
trie.delete("app");
console.log("After deleting 'app':", trie.suggest("a"));
