---
layout: home
title: S2M3 - Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
There is a bug in one line of the code. Find it, fix it, and submit.
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

**Example**

For
```
picture = ["abc",
           "ded"]
```           
the output should be
```
solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
```
**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.string picture**

    A non-empty array of non-empty equal-length strings.

    *Guaranteed constraints:*

        1 ≤ picture.length ≤ 100,
        1 ≤ picture[i].length ≤ 100.

* **[output] array.string**

    The same matrix of characters, framed with a border of asterisks of width 1.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M3 - Task 2](../S2M3_Task_2/README.html) | [S2M3 - Task 4](../S2M3_Task_4/README.html)        

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