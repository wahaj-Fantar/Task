let input = ["bat", "tap", "cat", "tab", "pat"];
let groupedAnagrams = [];

for (let i = 0; i < input.length; i++) {
    let currentWord = input[i];
    let foundGroup = false;

    for (let group of groupedAnagrams) {
        if (areAnagrams(group[0], currentWord)) {
            group.push(currentWord);
            foundGroup = true;
            break;
        }
    }

    if (!foundGroup) {
        groupedAnagrams.push([currentWord]);
    }
}

function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) return false;

    let sortedWord1 = word1.split('').sort().join('');
    let sortedWord2 = word2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
}

console.log(groupedAnagrams);

            