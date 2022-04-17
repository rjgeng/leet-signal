---
layout: home
title: S3M1 - Task 2 (Alternative)
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Count all the words in a string, then produce a new string when the count of each word in parentheses follows each word.

If the string is empty, return an empty string.

**Example**

Input:
```
s == "this is this sample"
```
-   Output:
```
"this(2) is(1) this(2) sample(1)"
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    *Constraints*

        Words made of only lowercase letters separated by a single space. No spaces on either end.

* **[output] string**

    The string with the counts baked into it, no spaces on either end.

* **back/forward** 

    [Home - Bloomtech](../../../code-signal-arcade-bloomtech/README.html) 

    [Back S3M1 - Task 2](../../S3M1_Task_2/README.html) | [Forward S3M1 - Task 3](../../S3M1_Task_3/README.html)

**[JavaScript (ES6)] Syntax Tips**

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