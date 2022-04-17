---
layout: home
title: S2M1 - Task 8
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Produce an array of `n` strings.

Each string will contain `m` uppercase `"A"`s.

**Example**

Input:
```
n == 3
m == 2
```
-   Output:
```
["AA", "AA", "AA"]
```
**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The number of strings in the final array.

* **[input] integer m**

    The number of capital `"A"`s in each string.

* **[output] array.string**

    Array of `n` strings of `m` `"A"`s.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M1 - Task 7](../S2M1_Task_7/README.html) | [S2M1 - Task 9](../S2M1_Task_9/README.html)

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