---
layout: home
title: S1M1 - Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](../S1M1_Task_2/README.md) | [Next](../S1M1_Task_4/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)


Write a function that performs a sequence of mathematical operations by reassigning the results into the same variable.

Even though this could be a one-liner, **only use a single additional variable for this, and do each step as an independent operation**.

    1.  Add `7` to the number.
    2.  Divide the result by `2` (the result could be fractional).
    3.  Multiply that result by `5`.

Return the result.

**Example**

Input:
```
n == 5
```
Computation:
```
5 + 7  == 12     Add 7 to get 12
12 / 2 == 6      Divide the 12 by 2 to get 6
6 * 5  == 30     Multiply the 6 by 5 to get 30
```
-   Output:
```
30
```


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The first of the numbers to be summed

    *Constraints*

    <code type='math/tex'>-10^3 \leq value \leq 10^3</code>.


* **[output] float**

    The result of the computation

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