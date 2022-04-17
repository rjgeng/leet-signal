---
layout: home
title: S1M2 - Task 10 - c
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md) 

Normally, dividing by zero is a bad thing that will cause programs to crash. Write a safer division function
that returns the division of two numbers (the numerator divided by the denominator) unless the denominator is 0, in which case it should return `0` instead of crashing.

**Example**

Input:
```
numerator = 1
denominator = 2
```
-   Output:
```
0.5
```
Input:
```
numerator = 12
denominator = 0
```
-   Output:
```
0
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer numerator**

    A number.

    *Guaranteed constraints:*

    <code type='math/tex'> -10^2 \leq value \leq 10^2 </code>.
    
* **[input] integer denominator**

    A number.

    *Guaranteed constraints:*

    <code type='math/tex'> -10^2 \leq value \leq 10^2 </code>.

* **[output] integer**

    The result of numerator / denominator or `0` if denominator is `0`.

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