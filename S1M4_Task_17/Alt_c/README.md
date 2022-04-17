---
layout: home
title: S1M4 - Task 17 - c
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Construct a string of `p` copies of `n` capital `"A"`s and `m` capital `"B"`s.

**Do not use any built-in string duplication functionality to solve this.**

**Example**

Input:
```
p = 2
n = 1
m = 2
```
Output:
```
"ABBABB"  (two copies of "ABB")
```
Input:
```
p == 3
n == 2
m = 0
```
Output:
```
"AAAAAA"
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer p**

    The number of `"A"`/`"B"` copies to put in the string.

    *Constraints*

    0 <= p <= 100

* **[input] integer n**

    The number of "A"s in each copy.

    *Constraints*

    0 <= p <= 10

* **[input] integer m**

    The number of "B"s in each copy.

    *Constraints*

    0 <= p <= 10

* **[output] string**

    A string of `p` copies of `n` `"A"`s and `m` `"B"`s.

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