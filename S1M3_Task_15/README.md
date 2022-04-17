---
layout: home
title: S1M3 - Task 15
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M3_Task_14/README.md) | [Next](../S1M3_Task_16/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Return true if a string is all uppercase.

-   **Javascript**: there's no built-in for this. We have to compare the string to a lowercase version of itself created with `.toUpperCase()`.

-   **Python**: you can use the built-in `.isupper()` to determine this.

One difference is that this technique on JavaScript will report punctuation as uppercase, but the Python version will not.

**Example**

Input:
```
s == "GOATS"
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

    True if the string is all uppercase.

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