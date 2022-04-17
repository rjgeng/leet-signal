---
layout: home
title: S1M4 - Task 10 - py3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

This function accepts an array. It should return an array with members that are equal to those in the original array multiplied by 2.

You can modify the existing array and return it, or construct a new one.

If the input array is empty, an empty array should be returned.

**Example**

Input:
```
a == [0, 1, 2, 3]
```
Output:
```
[0, 2, 4, 6]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

* **[output] array.integer**

    An array with the input array's values all multiplied by 2.

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