---
layout: home
title: S2M1 - Task 10
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are given an array of integers digits representing the digits of a positive integer. For example, `digits = [1, 2, 3]` represents the integer `123`.

It is guaranteed that `digits` does not have any leading zeros.

Assuming that `digits` represents the integer `n`, your task is to return an array that represents the integer `n + 1`.

**Example**

-   For digits = [1, 2, 3], the output should be solution(digits) = [1, 2, 4];
-   For digits = [1, 2, 9], the output should be solution(digits) = [1, 3, 0];
-   For digits = [9, 9, 9], the output should be solution(digits) = [1, 0, 0, 0].

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer digits**

    An array with integer digits from `0` to `9`.

    *Guaranteed constraints:*

        1 ≤ digits.length ≤ 104,
        
        0 ≤ digits[i] ≤ 9.

* **[output] integer**

    Return an array that represents the digits of n + 1.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M1 - Task 9](../S2M1_Task_9/README.html) | [S2M1 - Task 11](../S2M1_Task_11/README.html)

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