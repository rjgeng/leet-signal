---
layout: home
title: S2M3 - Task 8
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You have an array `p` of points on a Cartesian plane. Find and return the minimum possible [Euclidian distance](http://www.cut-the-knot.org/pythagoras/DistanceFormula.shtml) between two points with different indices in `p`.

**Example**

    For p = [[0, 11], [-7, 1], [-5, -3]], the output should be
    solution(p) = 4.472135955.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **array.array.integer p**

    Every inner array `p[i]` contains exactly 2 integers: the `x` and `y` coordinates of the `ith` point.

    *Guaranteed constraints:*

    2 ≤ p.length ≤ 2 · 104,

        p[i].length = 2,
        |p[i][j]| ≤ 107.

* **[output] float**

    The minimum possible distance between two points with different indices in `p`.

    Your answer will be considered correct if its absolute error doesn't exceed `10^-5`.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M3 - Task 7](../S2M3_Task_7/README.html) | [S2M3 - Task 9](../S2M3_Task_9/README.html) 


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