// Time Complexity: O(log(min(x, y)))                   -----    Optimized
// Space Complexity: O(1)

var canMeasureWater = function (x, y, target) {

    if (target > x + y) {
        return false;
    }

    const gcd = (a, b) => {

        while (b !== 0) {
            [a, b] = [b, a % b];
        }

        return a;
    };

    return target % gcd(x, y) === 0;
};






// Time Complexity: O(x * y).                       -----    Brute Force
// Space Complexity: O(x * y)

var canMeasureWater = function (x, y, target) {

    if (target > x + y) {
        return false;
    }

    const queue = [[0, 0]];
    const visited = new Set(["0,0"]);

    while (queue.length > 0) {

        const [a, b] = queue.shift();

        if (a + b === target) {
            return true;
        }

        const states = [
            // Fill X
            [x, b],

            // Fill Y
            [a, y],

            // Empty X
            [0, b],

            // Empty Y
            [a, 0],

            // Pour X -> Y
            [
                a - Math.min(a, y - b),
                b + Math.min(a, y - b)
            ],

            // Pour Y -> X
            [
                a + Math.min(b, x - a),
                b - Math.min(b, x - a)
            ]
        ];

        for (const [newA, newB] of states) {

            const key = `${newA},${newB}`;

            if (!visited.has(key)) {
                visited.add(key);
                queue.push([newA, newB]);
            }
        }
    }

    return false;
};