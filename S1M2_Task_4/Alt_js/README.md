---
layout: home
title: S1M2 - Task 4 - js
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Back --> ](../README.md) 

Write a function that converts a floating point number to a string with a specific number of digits past the decimal place.

**JavaScript**

You can do this with the `.toFixed()` method. This will make a new string with the given number of decimal places, rounded if necessary.
```
let x = 12.3456;
let y = x.toFixed(2);  // y is now "12.34"
```
**Python**

You can do this with a format string. This will make a new string with the given number of decimal places, rounded if necessary.
```
x = 12.3456
y = f"{x:.2f}"     # y is now "12.34"

a = 4
b = 3.14159265358979
c = f"{b:.{a}f}"   # c is now "3.1415" 
```
**Example**

Input:
```
s == "12.345"
places = 2
```
-   Output:
```
"12.34"  (as a string)
```
Input:
```
s == "12.3"
places = 4
```
-   Output:
```
"12.3000"  (as a string)
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] float f**

    A floating point number.

    *Guaranteed constraints:*

    <code type='math/tex'>-10^5 \leq value \leq 10^5</code>.

* **[input] integer places**

    The number of decimal places

    *Constraints*

    0 <= places <= 10

* **[output] integer**

    [output] string

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