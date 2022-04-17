---
layout: home
title: S1M2 - Task 5 - c 
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md) 

Write a function that computes the absolute value of a number.

**Solve this first without using the built-in absolute value function.**

The absolute value of a negative number is that number without the negative sign.

The absolute value of a non-negative number is the number.

Once you solve this without using the built-in functions, you can do it again with the built-ins, if you wish:

-   JavaScript: Math.abs()
-   Python: abs()

**Example**

Input:
```
x == 12
```
-   Output:
```
12
```
Input:
```
x == -20.2
```
-   Output:
```
20.2
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] float x**

    First number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^2 \leq value \leq 10^2</code>.


* **[output] boolean**

    True if the arrays are equal.

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