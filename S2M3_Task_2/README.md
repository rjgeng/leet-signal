---
layout: home
title: S2M3 - Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Create a square 2D array of size `size` x `size`. Fill the array with `0`.

Then draw a line of `1`s down the main diagonal.

This is called an *identity matrix*.

**Example**

Input:
```
size == 4
```
-   Output:
```
[
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[[input] integer size**

    The number of rows and columns.

    *Constraints*

        0 < size < 40

* **[output] array.array.integer**

    The resulting 2D array, zero-filled with 1s down the main diagonal.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M3 - Task 1](../S2M3_Task_1/README.html) | [S2M3 - Task 3](../S2M3_Task_3/README.html)       

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