---
layout: home
title: S1M4 - Task 7
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M4_Task_6/README.md) | [Next](../S1M4_Task_8/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Write a function that chops off the beginning and end of an array and puts them in a new array.

An array containing the original array and the new array should be returned.

-   JavaScript: use `a.shift()` and `a.pop()`
-   Python: use `a.pop(0)` and `a.pop()`
-   PythonJava: see below

**Java**

This one's trickier in Java. You can make an array of two other arrays that have unknown lengths like this:
```
int a[][] = new int[2][];
```
Then if you have other arrays, you can assign them to array a like so:
```
int a[][] = new int[2][];

int b[] = {1, 2};
int c[] = {3, 4, 5};

a[0] = b;
a[1] = c;
```
That will result in `a` being:
```
[
    [1, 2],
    [3, 4, 5]
]
```
It might also be useful to use `System.arraycopy()` to extract values from array `a`.

**Example**

Input:
```
a == [1, 2, 3, 4, 5]
```
Output:
```
[
    [2, 3, 4],
    [1, 5]
]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

    *Constraints*

   2 <= a.length <= 100

* **[output] integer**

    The resulting 2D array.


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