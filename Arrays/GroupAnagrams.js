// Time Complexity: O(n × k log k)                               ---     Optimal Approach
// Space Complexity: O(n × k)

var groupAnagrams = function (strs) {
    let map = new Map();

    for (let str of strs) {
        // Sort characters to create a unique key
        let key = str.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return Array.from(map.values());
};




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