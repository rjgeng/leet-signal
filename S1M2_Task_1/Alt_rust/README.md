---
layout: home
title: S1M2 - Task 1 - rust
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Back --> ](../README.md) 

Write a function that converts a string to an integer.

-   JavaScript: you can do the conversion with the `parseInt()` function.
-   Python: you can do this conversion with the `int()` function.

The number in the string could be negative, but the built-in conversion function should handle this.

**Example**

Input:
```
s == "12"
```
-   Output:
```
12
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    A string containing an integer.

    *Constraints*

    The string will be no more than 5 characters and will contain a valid positive or negative integer.

* **[output] integer**

    The integer value of the string.

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