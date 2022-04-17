---
layout: home
title: S2M1 - Task 1
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
Construct a string of `p` copies of `n` capital `"A"`s and m capital `"B"`s.

Except if the copy number is evenly divisible by `3`, in which case insert a string of `p` capital `"X"`s instead.

Copy numbers begin with `0` for the first copy.

**Do not use any built-in string duplication functionality to solve this.**

**Example**

Input:
```
p = 3
n = 1
m = 1
```
-   output:
```
"XXXABAB"  (would be "ABABAB", but the one in the 0th place is evenly divisible by 3)
```
Input:
```
p == 5
n == 1
m = 0
```
-   output:
```
"XXXXXAAXXXXXA"  (0th and 3rd "A"s replaced with "XXXXX")
```
**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer p**

    The number of "A"/"B" copies to put in the string.

    *Constraints*

    0 <= p <= 20

* **[input] integer n**

    The number of "A"s in each copy.

    *Constraints*

    0 <= n <= 10

* **[input] integer m**

    The number of "B"s in each copy.

    *Constraints*

    0 <= m <= 10

* **[output] string**

    A string of `p` copies of `n` `"A"`s and `m` `"B"`s. Except with the copies divisible by 3 replaced by `p` `"X"`s.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) | [S2M1 - Task 2](../S2M1_Task_2/README.html)


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