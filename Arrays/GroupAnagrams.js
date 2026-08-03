// Time Complexity: O(n² × k)                               ---     Brute Force
// Space Complexity: O(n)

var groupAnagrams = function (strs) {
    let result = [];
    let visited = new Array(strs.length).fill(false);

    function isAnagram(a, b) {
        if (a.length !== b.length) return false;

        let count = new Array(26).fill(0);

        for (let ch of a) {
            count[ch.charCodeAt(0) - 97]++;
        }

        for (let ch of b) {
            count[ch.charCodeAt(0) - 97]--;
        }

        return count.every(num => num === 0);
    }

    for (let i = 0; i < strs.length; i++) {
        if (visited[i]) continue;

        let group = [strs[i]];
        visited[i] = true;

        for (let j = i + 1; j < strs.length; j++) {
            if (!visited[j] && isAnagram(strs[i], strs[j])) {
                group.push(strs[j]);
                visited[j] = true;
            }
        }

        result.push(group);
    }

    return result;
};