---
layout: home
title: S3M1 - Task 1 (Alternative)
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Count the number of occurrences of certain letters in a string.

We want to know the counts of each of a set of letters in the input string. For instance, we might want to know how many `a`s, `x`s, and `j`s there are.

You'll return the list of requested counts as an array.

If `letters` is an empty string, return an empty array.

**Example**

Input:
```
s == "bacab"
letters = "cb"
```
-   Output:
```
[1,2]         (There is 1 "c" and 2 "b"s)
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    *Constraints*

        All lowercase, 0 <= s.length <= 100

* **[input] string letters**

    TThe letters to return count results for.

    Constraints

        All lowercase, 0 <= letters.length <= 30

* **[output] array.integer** 

    The counts of the requested letters.

* **back/forward** 

    [Home - Bloomtech](../../../code-signal-arcade-bloomtech/README.html) 

    [Back S3M1 - Task 1](../../S3M1_Task_1/README.html) | [Forward S3M1 - Task 2](../../S3M1_Task_2/README.html)

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