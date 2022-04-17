---
layout: home
title: S1M4 - Task 12
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M4_Task_11/README.md) | [Next](../S1M4_Task_13/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Construct a string of n capital "A"s followed by a string of m capital "B"s.

Do not use any built-in string duplication functionality to solve this.

**Example**

Input:
```
n == 5
m == 3
```
Output:
```
"AAAAABBB"
```
Input:
```
n == 0
```
Output:
```
""
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The number of "A"s to put in the new string.

    *Constraints*

    0 <= n <= 250

* **[input] integer m**

    The number of "B"s to put in the new string.

    *Constraints*

    0 <= n <= 250

* **[output] string**

    A string of n "A"s followed by m "B"s.

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