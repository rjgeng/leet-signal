---
layout: home
title: S1M3 - Task 19 - c
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Construct a string of `n` capital `"A"`s.

**You must use a loop to solve this initially**. After that, you can experiment with other built-in string duplication methods.

**Example**

Input:
```
n == 5
```
-   Output:
```
"AAAAA"
```
Input:
```
n == 0
```
-   Output:
```
""
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The number of `"A"s` to put in the new string.

    *Constraints*

    0 <= n <= 1000

* **[output] integer**

    A string of `n` `"A"`s.

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