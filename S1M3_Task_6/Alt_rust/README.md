---
layout: home
title: S1M3 - Task 6 - rust
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Return true if a string is all lowercase.

**Javascript**: there's no built-in for this. We have to compare the string to a lowercase version of itself created with .`toLowerCase()`.

**Python**: you can use the built-in `.islower()` to determine this.

One difference is that this technique on JavaScript will report punctuation as lowercase, but the Python version will not.

**Example**

Input:
```
s == "goats"
```
Output:
```
true
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    *Constraints*

    Will only contain upper and lowercase letters.

* **[output] boolean**

    True if the string is all lowercase.

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