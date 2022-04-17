---
layout: home
title: S2M4 - Task 7
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You're given an array of integers `a`. Let's call `(a[i - 1], a[i], a[i + 1])` a good tuple, if **exactly 2** out of the 3 numbers in it are equal. For example, `(2, 1, 2)` is a good tuple, but `(1, 1, 1)` and `(1, 2, 3)` are not.

Your task is to return the number of good tuples in `a`.

**Note**: The tuples may be overlapping.

**Example**

-   For `a = [1, 1, 1, 2, 1, 3, 4]`, the output should be `solution(a) = 2`.

    Let's analyze all the tuples of 3 consecutive numbers in a:

    -   `(a[0], a[1], a[2]) = (1, 1, 1)`: all three of the numbers are equal, so this **is not** a good tuple.
    -   `(a[1], a[2], a[3]) = (1, 1, 2)`: exactly 2 out of 3 numbers are equal, so this **is** a good tuple.
    -   `(a[2], a[3], a[4]) = (1, 2, 1)`: exactly 2 out of 3 numbers are equal, so this **is** a good tuple.
    -   `(a[3], a[4], a[5]) = (2, 1, 3)`: none of the numbers are equal, so this **is not** a good tuple.
    -   `(a[4], a[5], a[6]) = (1, 3, 4)`: none of the numbers are equal, so this **is not** a good tuple.

    The only good tuples here are `(1, 1, 2)` and `(1, 2, 1)`, so the answer is` 2`.

-   For a = `[1, 1, 2, 1, 2, 1, 1]`, the output should be solution(a) = `5`.

    All of the `5` tuples of `3` consecutive elements form a good tuple.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    An array of integers.

    *Guaranteed constraints:*

        0 ≤ a.length ≤ 1000,
        1 ≤ a[i] ≤ 1000.

* **[output] integer**

    The number of good tuples in a.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M4 - Task 6](../S2M4_Task_6/README.html) | [S2M4 - Task 8](../S2M4_Task_8/README.html) 

**[JavaScript (ES6)] Syntax Tips**

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>