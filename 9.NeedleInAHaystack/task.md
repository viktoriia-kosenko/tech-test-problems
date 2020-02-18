## Needle in a haystack

Write a function called `search` that takes two parameters:

1. an array of arrays of words, similar to the following:

```
[["apple", "banana", "orange"], ["sleep", "run"], ["axe", "knife", "needle", "scissors"], ["chair", "table", "bed", ...], ...]
```

2. a word to find, e.g. `"needle"`
   The function should return `true` if the word to find is present in the array of arrays, and `false` if the word is not present.

```
search([["toe", "finger"], ["alien"]], "toe");
```

should return `true`.

```
search([["electricity"]], "gas");
```

should return `false`.
