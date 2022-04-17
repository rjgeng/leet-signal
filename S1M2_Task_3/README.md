---
layout: home
title: S1M2 - Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M2_Task_2/README.md) | [Next](../S1M2_Task_4/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Write a function that converts an integer to a floating point number.

-   JavaScript: you can do the conversion with the `parseFloat()` function.
-   Python: you can do this conversion with the `float()` function.

**Example**

Input:
```
i == 12
```
-   Output:
```
12.0  (as a float)
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer i**

    An integer.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^5 \leq value \leq 10^5</code>.

* **[output] float**

    A float containing the integer value.

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