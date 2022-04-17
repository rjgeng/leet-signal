---
layout: home
title: S3M1 - Task 3 (Alternative)
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given a string of lowercase words separated by single spaces, return a string with all duplicate words removed. However, the first occurrence of a duplicate word should be left in place; only the subsequent duplicates should be removed.

If the string is empty, return an empty string.

**Example**


Input:

```
s == "sample this is this sample"
```
-   Output:

```
"sample this is"    [The second "this" and "sample" are dropped as dups] 
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    *Constraints*

        Words made of only lowercase letters separated by a single space. No spaces on either end.

* **[output] string**

    The string with no duplicates.

* **back/forward** 

    [Home - Bloomtech](../../../code-signal-arcade-bloomtech/README.html) 

    [Back S3M1 - Task 3](../../S3M1_Task_3/README.html) | [Forward S3M2 - Task 1](../../S3M2_Task_1/README.html)

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