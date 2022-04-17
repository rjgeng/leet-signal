---
layout: home
title: S1M3 - Task 18 - py3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

For a given string, return the letter that's highest in the alphabet.

**Example**

Input:
```
s == "eniac"
```
-   Output:
```
"n"
```
Input:
```
s == "altair"
```
-   Output:
```
"t"
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    *Constraints*

    Lowercase a-z, 1 <= s.length <= 30

* **[output] string**

    The highest letter of the alphabet that occurs in the string.

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