---
layout: home
title: S2M1 - Task 4
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
Return the number of occurrences of `v` in array `a`.

If the array is empty, return `0`

**Example**

Input:
```
a == [1, 7, 2, 10, 7]
v == 7
```
Output:
```
2
```
**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

* **[input] integer v**

    The value to count.

* **[output] integer**

    The number of times the value v appears in the array.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M1 - Task 3](../S2M1_Task_3/README.html) | [S2M1 - Task 5](../S2M1_Task_5/README.html)

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