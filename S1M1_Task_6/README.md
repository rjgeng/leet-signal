---
layout: home
title: S1M1 - Task 6
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](../S1M1_Task_5/README.md) | [Next](../S1M2_Task_1/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Write a function that computes the sum of all values between `n` and `m`, inclusive.

There is a formula you can use to compute the sum from `1` to `n`:
```
total = n * (n + 1) / 2
```
But we've misplaced the formula for the sum from `n` to `m`!

Think outside the box... is there some way to use that formula, `n`, and `m` to get the answer? You don't have to come up with a new formula; there's a way to use the existing one to solve it.

**Example**

Input:
```
n == 5
m == 9
```
Computation by hand:
```
5 + 6 + 7 + 8 + 9 == 35
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The starting number to sum

    *Constraints*

    <code type='math/tex'> 1 \leq value \leq 10^3</code>.

* **[input] integer m**

    The final number to sum

    *Constraints*

    <code type='math/tex'> 1 \leq value \leq 10^3</code>.

* **[output] integer**

    The sum of numbers between 1 and n

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