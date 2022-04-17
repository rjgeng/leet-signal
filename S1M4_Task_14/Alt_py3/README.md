---
layout: home
title: S1M4 - Task 14 - py3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Construct a string made from every other character in the input string, excluding vowels.

The first character of the input string will be the first character in the output string.

If the input string is empty, return an empty string

For the purpose of this assignment, "y" is NOT considered a vowel, only "a", "e", "i", "o", and "u".

**Example**

Input:
```
s == "abcd"
```
Output:
```
"c"  (would have been "ac", except "a" is a vowel)
```
Input:
```
s == "abcdefg"
```
Output:
```
"cg"
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

    *Constraints*

    Contains lowercase `a`-`z`, 0 <= s.length <= 100

* **[output] string**

    Every other character in `s` except vowels.

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