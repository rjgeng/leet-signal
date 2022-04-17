---
layout: home
title: S1M3 - Task 2 - cpp
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)


Compute the product of all numbers from `a` to `b`, inclusive.

**Example**

Input:
```
a == 2
b == 7
```
Output:
```
5040  (because 2 * 3 * 4 * 5 * 6 * 7 == 5040)
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer a**

    The lower number.

    *Constraints*

    -12 <= a < b <= 12

* **[input] integer b**

    The lower number.

    *Constraints*

    -12 <= a < b <= 12

* **[output] integer**

    The product of all numbers from `a` to `b`.

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