---
layout: home
title: S1M2 - Task 16 - c
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md) 

This function will run a set of tests on three numbers. If the test passes, the function will return the string `"OK"`. Otherwise it returns `"NOK"`.

The test passes if:

-   a is greater than b AND
-   b is less than or equal to c AND
-   One of more of the following is true:
    -   a * 3 is greater than c OR
    -   c is less than or equal to a

**Example**

Input:
```
a == 728
b == 627
c == 4
```
-   Output:
```
"NOK"
```
Input:
```
a == 130
b == -91
c == 215
```
-   Output:
```
"OK"
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

    <code type='math/tex'>-10^3 \leq value \leq 10^3 </code>.

* **[input] integer b**

    Second number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^3 \leq value \leq 10^3 </code>.

* **[input] integer c**

    Third number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^3 \leq value \leq 10^3 </code>.

* **[output] string**

    `"OK"` if the test passes, else `"NOK"`.

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