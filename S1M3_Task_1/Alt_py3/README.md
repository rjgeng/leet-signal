---
layout: home
title: S1M3 - Task 1 - py3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Compute the factorial of an integer `n`. This is commonly written as n!, which is read as "n factorial".

**You must use a loop to solve this problem. You cannot hard-code the answers.**

The factorial of a number is the product of every integer between `1` and `n`.

Special case: the factorial of `0` is defined to be `1`.

**Example**

Input:
```
n == 3
```
Output:
```
6   (because 1 * 2 * 3 == 6)
```
Input:
```
n == 5
```
Output:
```
120  (because 1 * 2 * 3 * 4 * 5 == 120)
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The amount to withdraw.

    *Constraints*

    0 <= n <= 12

* **[input] integer m**

    The number of "B"s in each copy.

    *Constraints*

    0 <= m <= 10

* **[output] integer**

    The factorial of `n`.

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