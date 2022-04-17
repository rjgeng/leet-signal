---
layout: home
title: S1M3 - Task 17
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M3_Task_16/README.md) | [Next](../S1M3_Task_18/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

For a given string, return a new string with asterisks (`*`) on each side of each letter.

**Do not use any built-in `join()`-style functionality for this task.**

If the string is empty, return a single asterisks.

**Example**

Input:
```
s == "a"
```
-   Output:
```
"*a*"
```
Input:
```
s == "abc"
```
-   Output:
```
"*a*b*c*"
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    *Constraints*

    0 <= s.length <= 100

* **[output] string**

    A new string with characters properly separated by asterisks

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