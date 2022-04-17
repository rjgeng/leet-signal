---
layout: home
title: S1M3 - Task 3 - js
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Return the length of a string.

-   JavaScript: you can get the length with `s.length`.
-   Python: you can get the length with `len(s)`.

**Example**

Input:
```
s == "abcdef"
```
Output:
```
6
```
Input:
```
s ```== ""
```
Output:
```
0
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

* **[output] integer**

    The length of the string.

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