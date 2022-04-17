---
layout: home
title: S1M4 - Task 1
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M3_Task_19/README.md) | [Next](../S1M4_Task_2/Alt_rust/)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)


Construct a string of `p` copies of `n` capital `"A"`s and m capital `"B"`s.

Except if the copy number is evenly divisible by `3`, in which case insert a string of `p` capital `"X"`s instead.

Copy numbers begin with `0` for the first copy.

**Do not use any built-in string duplication functionality to solve this.**

**Example**

Input:
```
p = 3
n = 1
m = 1
```
-   output:
```
"XXXABAB"  (would be "ABABAB", but the one in the 0th place is evenly divisible by 3)
```
Input:
```
p == 5
n == 1
m = 0
```
-   output:
```
"XXXXXAAXXXXXA"  (0th and 3rd "A"s replaced with "XXXXX")
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