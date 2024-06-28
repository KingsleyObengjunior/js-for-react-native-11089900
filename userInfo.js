// userInfo.js
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage:
let names = ["Alice", "Bob", "Charlie"];
let modifiedNames = formatArrayStrings(strings, processedNumbers);
console.log(createUserProfiles(names, modifiedNames));
// Output: [{ originalName: "Alice", modifiedName: "ALICE", id: 1 }, ...]
