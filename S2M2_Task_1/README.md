---
layout: home
title: S2M2 - Task 1
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Return true if a string is a palindrome.

A palindrome is a word that is spelled the same forward and backward.

An empty string is a palindrome.

**Example**

Input:
```
s == "racecar"
```
-   Output:
```
true
```
Input:
```
s == "zork"
```
-   Output:
```
false
```
**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    Constraints

    Upper or lowercase letters only.

* **[output] string**

    True if the string is a palindrome.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M1 - Task 12](../S2M1_Task_12/README.html) | [S2M2 - Task 2](../S2M2_Task_2/README.html)    

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