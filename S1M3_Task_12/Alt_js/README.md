---
layout: home
title: S1M3 - Task 12 - js
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Back --> ](../README.md)

Return true if the first and last characters in the string are equal.

**Example**

Input:
```
s == "abcdef"
```
-   Output:
```
false
```
Input:
```
s == "abba"
```
-   Output:
```
true
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    *Constraints*

    All lowercase, 2 <= s.length <= 100

* **[output] boolean**

    True if the last two characters in the string are equal.

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