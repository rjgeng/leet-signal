---
layout: home
title: S2M3 - Task 6
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Write a function that builds an `n` x `n` multiplication table.

The result will be a 2D array. The `0th` row and column of the table begin with `1` and end with `n`.

**Example**

Input:
```
n == 4
```
-   Output:
```
[
    [1, 2,  3,  4],
    [2, 4,  6,  8],
    [3, 6,  9, 12],
    [4, 8, 12, 16]
]
```
**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The square dimension of the table.

    *Constraints*

        1 <= n <= 100

* **[output] array.array.integer**

    The multiplication table.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M3 - Task 5](../S2M3_Task_5/README.html) | [S2M3 - Task 7](../S2M3_Task_7/README.html)    

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