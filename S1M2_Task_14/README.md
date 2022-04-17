---
layout: home
title: S1M2 - Task 14
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------ 

[Home](../README.md)

[Before](../S1M2_Task_13/README.md) | [Next](../S1M2_Task_15/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Return the larger of three numbers.

If they're all the same, return any one.

**Example**

Input:
```
a == -2
b == 20
c == 10
```
-   Output:
```
20
```
Input:
``` 
a == 3490
b == 3490
c == 3490
```
-   Output:
```
3490
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer a**

    First number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^3 \leq value \leq 10^3 </code>.

* **[input] integer a**

    First number.

    *Guaranteed constraints:*

    <code type='math/tex'> -10^5 \leq value \leq 10^5 </code>.

* **[input] integer b**

    Second number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^5 \leq value \leq 10^5 </code>.

* **[input] integer c**

    Third number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^5 \leq value \leq 10^5 </code>.

* **[output] integer**

    The largest of the three numbers.

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