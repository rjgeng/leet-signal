---
layout: home
title: S1M2 - Task 6
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M2_Task_5/README.md) | [Next](../S1M2_Task_7/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Write a function that returns true if a number is between 2 and 7, exclusive. (That is, between 3 and 6, inclusive.)

**Example**

Input:
```
n == 3
```
-   Output:
```
true
```
Input:
```
n == 1
```
-   Output:
```
false
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    A number to test.

    *Constraints*

    -100 <= n <= 100

* **[output] boolean**

    True if the number is between 2 and 7, exclusive.

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