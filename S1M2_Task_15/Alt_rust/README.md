---
layout: home
title: S1M2 - Task 15 - rust
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Back --> ](../README.md) 

Return the largest of six numbers.

**Do not use any built-in maximum value function to solve this!**

There could be ties for largest.

**Hint**:

It's possible to do this without the AND operator--think of how you solve this problem as a human looking at a list of numbers of a piece of paper. Do you look at the first and compare to the rest, then look at the second and compare to the rest, then look at the third and compare to the rest? And so on for all the numbers?

Or is your algorithm simpler than that?

**Example**

Input:
```
a == -2
b == 20
c == 10
d == 15
e == 99
f == -30
```
-   Output:
```
99
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer a**

    First number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^5 \leq value \leq 10^5</code>.

* **[input] integer b**

    Second number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^5 \leq value \leq 10^5</code>.

* **[input] integer c**

    Third number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^5 \leq value \leq 10^5</code>.

* **[input] integer d**

    Fourth number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^5 \leq value \leq 10^5</code>.

* **[input] integer e**

    Fifth number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^5 \leq value \leq 10^5</code>.

* **[input] integer f**

    Sixth number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^5 \leq value \leq 10^5</code>.

* **[output] integer**

    The largest of the numbers.

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