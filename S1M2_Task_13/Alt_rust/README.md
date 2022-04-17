---
layout: home
title: S1M2 - Task 13 - rust
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md) 

This function will analyze its input and return a string based on it.

-   If the input is `0`, return `"none"`.
-   If the input is `1`, return `"one"`.
-   If the input is `2`, return `"two"`.
-   If the input is anything else, return `"some"`.

**Example**

Input:
```
n == 12
```
-   Output:
```
"some"
```
Input:
```
n == 1
```
-   Output:
```
"one"
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The source number for the computation.

    *Constraints*

    -100 <= n <= 100

* **[output] string**

    "none", "one", "two", or "some" depending on input.

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