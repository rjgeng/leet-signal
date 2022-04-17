---
layout: home
title: S1M4 - Task 16
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M4_Task_15/README.md) | [Next](../S1M4_Task_17/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given a number and a field width, return a string with that number padded with leading zeros.

The field width is the total number of digits in the result string, not the number of zeros.

If the width is smaller than the number of digits in the `n`, return a string containing only `n`.

**Example**

Input:
```
n == 7
width == 3
```
Output:
```
"007"
```
Input:
```
n == 3490
width == 2
```
Output:
```
"3490"
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The input number.

    *Constraints*

    <code type='math/tex'> 0 \leq value \leq 10^9</code>.

* **[input] integer width**

    The total width of the field, padded zeros plus the number

    *Constraints*

    0 <= width <= 20

* **[output] string**

    A string containing the number plus any zero padding.

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