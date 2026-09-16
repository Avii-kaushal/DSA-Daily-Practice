
// Time Complexity: O(n)              Stack Approach  ---   Optimal Approach
// Space Complexity: O(n)

function simplifyPath(path) {
    let stack = [];

    // Split path using "/"
    let parts = path.split("/");

    for (let part of parts) {

        // Ignore empty strings and "."
        if (part === "" || part === ".") {
            continue;
        }

        // ".." means go to parent directory
        if (part === "..") {

            // Only pop if we are not already at root
            if (stack.length > 0) {
                stack.pop();
            }
        }

        // Any other name is a valid directory/file name
        else {
            stack.push(part);
        }
    }

    // Join directories with "/"
    return "/" + stack.join("/");
}




// Time Complexity: O(n)              Array Approach  ---   Brute Force Approach
// Space Complexity: O(n)

function simplifyPath(path) {
    let result = [];

    // Split path by "/"
    let parts = path.split("/");

    for (let part of parts) {

        // Ignore empty parts and current directory "."
        if (part === "" || part === ".") {
            continue;
        }

        // Go to parent directory
        else if (part === "..") {

            // Remove the last directory
            // if we are not already at root
            if (result.length > 0) {
                result.splice(result.length - 1, 1);
            }
        }

        // Valid directory/file name
        else {
            result.push(part);
        }
    }

    // Build final canonical path
    if (result.length === 0) {
        return "/";
    }

    return "/" + result.join("/");
}


// Driver Code
let path = "/home/user/Documents/../Pictures";

console.log(simplifyPath(path));

// Output:
// "/home/user/Pictures"