---
layout: home
title: S2M1 - Task 11
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

*Avoid using built-in big integers to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.*

Given two binary strings `a` and `b`, add them together and return the resulting string.

**Example**

-   For a = "1000" and b = "111", the output should be
  
    solution(a, b) = "1111";

-   For a = "1" and b = "1", the output should be
  
    solution(a, b) = "10".

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string a**

    A string that can contain only 0 and 1.

    *Guaranteed constraints:*

        0 ≤ a.length ≤ 105.

* **[input] string b**

    A string that can contain only 0 and 1.

    *Guaranteed constraints:*

        0 ≤ a.length ≤ 105.

* **[output] integer**

    The result of adding strings `a` and `b`, without any leading zeros.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M1 - Task 10](../S2M1_Task_10/README.html) | [S2M1 - Task 12](../S2M1_Task_12/README.html)    

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