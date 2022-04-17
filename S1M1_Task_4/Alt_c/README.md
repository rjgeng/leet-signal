---
layout: home
title: S1M1 - Task 4 - c
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Back --> ](../README.md)

Write a function that computes the sum of all values between `1` and `n`, inclusive.

There is a formula you can use to compute this:
```
total = n * (n + 1) / 2
```
**Example**

Input:
```
n == 5
````
Computation by hand:
```
1 + 2 + 3 + 4 + 5 == 15
```
Computation with the formula:
```
5 * (5 + 1) / 2 ==
5 * 6 / 2 ==
30 / 2 == 
15
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The source number for the computation.

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