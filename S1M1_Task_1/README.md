---
layout: home
title: S1M1 - Task 1
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[BloomTech](../../code-signal-arcade-bloomtech/README.md)

[Home](../README.md) | [Next](../S1M1_Task_2/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Write a function that returns the sum of two numbers.

**Example**

Input:
```
arg1 == 12
arg2 == -4
```
-   Output:
```
8
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer arg1**

    The first of the numbers to be summed

    *Constraints*

    <code type='math/tex'>-10^5 \leq value \leq 10^5</code>.

* **[input] integer arg2**

    The second of the numbers to be summed

    *Constraints*

   <code type='math/tex'>-10^5 \leq value \leq 10^5</code>.

* **[output] integer**

    A string of `p` copies of `n` `"A"`s and `m` `"B"`s. Except with the copies divisible by 3 replaced by `p` `"X"`s.


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