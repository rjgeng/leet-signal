---
layout: home
title: S1M2 - Task 12 - c
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md) 

Return the larger of two characters.

For example, "c" is larger than "a" because "c" comes later in the alphabet.

If the characters are the same, return either one.

This can be done with a regular comparison operator like `<` or `>`.

Entire strings can be compared this way. The results are in lexicographical order, which you can think of as alphabetical order, except it includes other characters.

**Example**

Input:
```
a == "x"
b == "t"
```
-   Output:
```
"x"
```
Input:
```
a == "m"
b == "m"
```
-   Output:
```
"m"
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] char a**

    First character.

    *Constraints*

    A lowercase character between "a" and "z" inclusive.

* **[input] char b**

    Second character.

    *Constraints*

    A lowercase character between "a" and "z" inclusive.

* **[output] char**

    The largest of the two characters

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