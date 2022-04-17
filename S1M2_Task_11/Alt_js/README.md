---
layout: home
title: S1M2 - Task 11 - js
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md) 

Return the larger of two numbers.

If they're the same, return either one.

**Example**

Input:
```
a == -2
b == 20
```
-   Output:
```
20
```
Input:
```
a == 3490
b == 3490
```
-   Output:
```
3490
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer a**

    First number.

    *Guaranteed constraints:*

    <code type='math/tex'> -10^5 \leq value \leq 10^5 </code>.

* **[input] integer b**

    Second number.

    *Guaranteed constraints:*

    <code type='math/tex'> -10^5 \leq value \leq 10^5 </code>.

* **[output] integer**

    The largest of the two numbers.

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