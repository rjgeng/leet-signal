---
layout: home
title: S1M3 - Task 8
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M3_Task_7/README.md) | [Next](../S1M3_Task_9/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given a number, return the number of digits.

Hint:

-   JavaScript: you can convert a number to a string with the `String()` function.
-   Python: you can convert a number to a string with the `str()` function.

**Example**

Input:
```
n == 3490
```
Output:
```
4
```
Input:
```
n == 0
```
Output:
```
1
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The input number/

    Constraints

    <code type='math/tex'> 0 \leq value \leq 10^9</code>.

* **[output] integer**

    The number of digits in the input integer

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