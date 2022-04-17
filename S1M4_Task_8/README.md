---
layout: home
title: S1M4 - Task 8
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M4_Task_7/README.md) | [Next](../S1M4_Task_9/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Write a function that inserts a new value in the middle of an array.

The middle index is the length of the array divided by 2, rounded down.

-   JavaScript: use `a.splice(index, 0, value)` to insert `value` before `index`
-   Python: use `a.insert(index, value)` to insert `value` before `index`
-   Java: see below

**Java**

This one's trickier in Java. You can either use an `ArrayList` or you can slice and dice with `System.arraycopy()`.

**Example**

Input:
```
a == [1, 2, 3, 4]
x = 99
```
Output:
```
[1, 2, 99, 3, 4]
```
Input:
```
a == [1, 2, 3]
x = 99
```
Output:
```
[1, 99, 2, 3]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

    *Constraints*

    2 <= a.length <= 100

* **[input] integer x**

    The value to insert into the middle of the array

* **[output] array.integer**

    The resulting array.

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