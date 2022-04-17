---
layout: home
title: S3M2 - Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Produce a histogram of word frequency in a string.

The function should return an array of strings, where each string takes the form:

```
word: ####
```
`word` is the word in question, followed by a colon and a space, followed by a number of hash marks that corresponds to the number of times that word appears in the input string.

The result array should be sorted alphabetically. This can be done by calling `.sort()` of the array before returning it.

If the input string is empty, return an empty array.

**Example**

Input:
```
s == "how many how many many dups"
```
-   Output:
```
["dups: #",  "how: ##",  "many: ###"]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    *Constraints*

        Words made of only lowercase letters separated by a single space. No spaces on either end.

* **[output] array.array.integer**

    The sorted histogram result.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S3M2 - Task 1](../S3M2_Task_1/README.html) | [S3M2 - Task 3](../S3M2_Task_3/README.html)     

**[JavaScript (ES6)] Syntax Tips**

{% highlight javascript linenos=table %}
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
{% endhighlight %}

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>