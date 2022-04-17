---
layout: home
title: S2M1 - Task 6
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given an array and a value `x`, return an array with all the elements of the original except those with value `x`.

**Example**

Input:
```
a == [1, 7, 2, 10, 7]
x == 7
```
-   Output:
```
[1, 2, 10]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

* **[input] integer x**

    The value to filter out.

* **[output] integer**

    Filtered array.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M1 - Task 5](../S2M1_Task_5/README.html) | [S2M1 - Task 7](../S2M1_Task_7/README.html)

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