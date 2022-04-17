---
layout: home
title: S2M1 - Task 12
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You are given an array of positive integers arr. You'd like to know how many triangles can be formed with side lengths equal to adjacent elements from `arr`.

Construct an array of integers of length `arr.length - 2`, where the `ith` element is equal to `1` if it's possible to form a triangle with side lengths `arr[i]`, `arr[i + 1]`, and `arr[i + 2]`, otherwise `0`.

Return the resulting array of integers.

Note: A triangle can be formed with side lengths `a`, `b`, and `c` if `a + b > c`, `a + c > b`, and `b + c > a`.

**Example**

-   For arr = [1, 2, 2, 4], the output should be solution(arr) = [1, 0].

    -   output[0] = 1 because we can form a triangle with side lengths 1, 2, and 2.
    -   output[1] = 0 because 2 + 2 ≤ 4, so we can't form a triangle with side lengths 2, 2, and 4.
  
-   For arr = [2, 10, 2, 10, 2], the output should be solution(arr) = [0, 1, 0].

    -   output[0] = 0 because 2 + 2 ≤ 10, so we can't form a triangle with side lengths 2, 2, and 10.
    -   output[1] = 1 because we can form a triangle with side lengths 2, 10, and 10.
    -   output[2] = 0 because 2 + 2 ≤ 10, so we can't form a triangle with side lengths 2, 2, and 10.
    
-   For arr = [1000000000, 1000000000, 1000000000, 1000000000], the output should be solution(arr) = [1, 1].

    All elements of the resulting array are equal to 1, because all elements of the array are the same, therefore they can form equilateral triangles.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer arr**

    An array of positive integers.

    *Guaranteed constraints:*

        3 ≤ arr.length ≤ 1000,
        1 ≤ arr[i] ≤ 109.

* **[output] integer**

    Return an array of `0`s and `1`s where the `ith` element represents whether a triangle can be formed with side lengths `arr[i]`, `arr[i + 1]`, and `arr[i + 2]`.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M1 - Task 11](../S2M1_Task_11/README.html) | [S2M2 - Task 1](../S2M2_Task_1/README.html)    


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