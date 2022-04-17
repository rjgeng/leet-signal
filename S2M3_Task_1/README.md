---
layout: home
title: S2M3 - Task 1
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
Create a 2D array of size `row_count` x `col_count`. Fill the array with `0`.

**Example**

Input:
```
rows == 2
cols == 3
```
-   Output:
```
[
    [0, 0, 0],
    [0, 0, 0]
]
```
**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer row_count**

    The number of rows.

    *Constraints*

    0 < row_count < 40

* **[input] integer col_count**

    The number of columns.

    *Constraints*

    0 < row_count < 40

* **[output] array.array.integer**

    The resulting 2D array, zero-filled.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M2 - Task 7](../S2M2_Task_7/README.html) | [S2M3 - Task 2](../S2M3_Task_2/README.html)         

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