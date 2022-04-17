---
layout: home
title: S2M2 - Task 4
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
Given an input array a determine the length of the leading "run" of numbers. The run is how many numbers at the front of the array are the same.

If the array is empty, return 0.

**Example**

Input:

```
a == [7, 7, 7, 4, 7, 2]
```
-   Output:
```
3
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

* **[output] integer**

    The length of the initial run.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M2 - Task 3](../S2M2_Task_3/README.html) | [S2M2 - Task 5](../S2M2_Task_5/README.html)     

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