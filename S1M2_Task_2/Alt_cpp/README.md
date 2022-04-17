---
layout: home
title: S1M2 - Task 2 - cpp
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md) 

Write a function that converts a floating point number to a string.

-   JavaScript: you can do the conversion with the String() function.
-   Python: you can do this conversion with the str() function.

The number could be negative, but the built-in conversion function should handle this.

**Example**

Input:
```
f == 12.345
```
-   Output:
```
"12.345"  (as a string)
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] float f**

    An float.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^2 \leq value \leq 10^2</code>.

* **[output] string**

    A string containing the floating point value.

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