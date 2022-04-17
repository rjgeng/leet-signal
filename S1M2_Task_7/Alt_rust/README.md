---
layout: home
title: S1M2 - Task 7 - rust
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md) 

Write a function that converts an integer to a string.

-   JavaScript: you can do the conversion with the `String()` function.
-   Python: you can do this conversion with the `str()` function.

The integer could be negative, but the built-in conversion function should handle this.

**Example**

Input:
```
s == 12
```
-   Output:
```
"12"  (as a string)
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer i**

    A integer.

    *Guaranteed constraints:*

    <code type='math/tex'> -10^5 \leq value \leq 10^5 </code>.

* **[output] string**

    A string containing the integer value.

**[JavaScript (ES6)] Syntax Tips**

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>