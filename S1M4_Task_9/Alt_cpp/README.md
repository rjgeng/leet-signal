---
layout: home
title: S1M4 - Task 9 - cpp
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

This function accepts an array and a value to search for. It should return true if the value occurs anywhere in the array.

**Do not use any built-in search functions to solve this.**

**Example**

Input:
```
a == [0, 1, 2, 3]
v == 2
```
Output:
```
true
```
Input:
```
a == [0, 1, 2, 3]
v == 99
```
Output:
```
false
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

* **[input] integer v**

    The value to search for.

* **[output] boolean**

    True if the value appears anywhere in the array.
    
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