---
layout: home
title: S1M3 - Task 7
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M3_Task_6/README.md) | [Next](../S1M3_Task_8/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Count the number of occurrences of a letter in a string.

**Do not use any built-in `count()` style functions for this task.**

**Example**

Input:
```
s == "bacab"
letter = "b"
```
Output:
```
2
```
Input:
```
s == "abbb"
letter == "a"
```
Output:
```
1
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    *Constraints*

    All lowercase, 2 <= s.length <= 100

* **[input] char letter**

    The letter to count.

    *Constraints*

    Lowercase `a-z`.

* **[output] integer**

    The count of the letter.

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