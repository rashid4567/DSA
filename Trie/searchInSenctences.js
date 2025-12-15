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

  searchInSentence(sentence) {
    const words = sentence.toLowerCase().split(/\W+/);
    for (let word of words) {
      if (this.search(word)) {
        return true;
      }
    }
    return false;
  }
}

  const trie = new Trie();

  trie.insert("apple");
  trie.insert("app");
  trie.insert("ape");
  trie.insert("bat");
  trie.insert("cat");

  console.log(trie.searchInSentence("I have a bat"));
  console.log(trie.searchInSentence("She owns a dog"));
  console.log(trie.searchInSentence("An ape lives here"));
  console.log(trie.searchInSentence("They ate apples"));
