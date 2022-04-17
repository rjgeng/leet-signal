---
layout: home
title: S1M4 - Task 5
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](..) | [Next](..)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)



Return true if two arrays are equal.

The arrays are equal if they are the same length and contain the same value at each particular index.

Two empty arrays are equal.

**Example**

Input:
```
a == [1, 7, 2, 10, 7]
b == [1, 7, 2, 10, 7]
```
-   Output:
```
true
```
Input:
```
a == [7, 2, 10, 7]
b == [1, 7, 2, 10, 7]
```
-   Output:
```
false
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer arg2**

    *Constraints*

   <code type='math/tex'>-10^5 \leq value \leq 10^5</code>.

* **[output] integer**


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