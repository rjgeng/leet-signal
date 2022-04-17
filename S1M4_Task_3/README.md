---
layout: home
title: S1M4 - Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](..) | [Next](..)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)


This function accepts a string. It should return an array where each element is a single letter in the string, in the same order.

If the input string is empty, return an empty array.

**Example**

Input:
```
s == "abcd"
```
Output:
```
["a", "b", "c", "d"]
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