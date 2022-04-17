---
layout: home
title: S1M3 - Task 4 - py3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Return the character at index `n` in a string `s`.

If the index is out of range of the length of the string, return the string `"none"`. Otherwise, return the character at that index.

**Example**

Input:
```
s == "abcdef"
n == 2
```
Output:
```
"c"
```
Input:
```
s == "hi there!"
n == 37
```
Output:
```
"none"
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

* **[input] integer n**

    The index in the string from which to retrieve a character.

* **[output] string**

    The character at that index, or the string `"none"` if the index is out of range.

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