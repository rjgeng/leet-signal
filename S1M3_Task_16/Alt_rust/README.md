---
layout: home
title: S1M3 - Task 16 - rust
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Back --> ](../README.md)

For a given string, return a new string with asterisks (`*`) on each side of each letter.

If the string is empty, return an empty string.

**Example**

Input:
```
s == "a"
```
-   Output:
```
"*a*"
```
Input:
```
s == "abc"
```
-   Output:
```
"*a**b**c*"
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    *Constraints*

    0 <= s.length <= 100

* **[output] string**

    A new string with characters properly separated by asterisks

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