---
layout: home
title: S2M4 - Task 5
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

*Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.*

Implement a function that takes two strings, `s` and `x`, as arguments and finds the first occurrence of the string `x` in `s`. The function should return an integer indicating the index in `s` of the first occurrence of `x`. If there are no occurrences of `x` in `s`, return `-1`.

**Example**

-   For `s = "CodesignalIsAwesome"` and `x = "IA"`, the output should be
   
        `solution(s, x) = -1`;
-   For `s = "CodesignalIsAwesome"` and `x = "IsA"`, the output should be
   
        `solution(s, x) = 10`.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    A string containing only uppercase or lowercase English letters.

    *Guaranteed constraints:*

        1 ≤ s.length ≤ 10^6.

* **[input] string x**

    String, containing only uppercase or lowercase English letters.

    *Guaranteed constraints:*

        1 ≤ x.length ≤ 10^6.

* **[output] boolean**

    An integer indicating the index of the first occurrence of the string `x` in `s`, or `-1` if s does not contain `x`.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M4 - Task 4](../S2M4_Task_4/README.html) | [S2M4 - Task 6](../S2M4_Task_6/README.html) 

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