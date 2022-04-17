---
layout: home
title: S3M2 - Task 1
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Compute the value `f(n)` for a number of input integers, `nums`, where `f()` is an expensive, time-consuming function.

Return the results of `f(n)` in an array.

Hint: cache the results of previous calls to keep them from timing out.

Add this function `f()` before your code for `solution()`:

**JavaScript:**

```
function f(n) {
    let r = 1;
    
    for (let i = 0; i < 5000000; i++)
        r = ((r + n) * n) % 9973;
        
    return r;
}
```

**Python:**

```
def f(n):
    r = 1
    
    for i in range(5000000):
        r = ((r + n) * n) % 9973
        
    return r
```

**Example**

Input:
```
nums == [1, 2, 3]
```
-   Output:
```
[3528, 135, 4115]    (e.g. f(2) is 135)
```
**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer nums**

    The input values.

    *Constraints*

        -10^9 <= n <= 10^9

* **[input] integer col_count**

    The number of columns.

    *Constraints*

        0 < row_count < 40

* **[output] array.integer**

    The numeric results.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S3M1 - Task 3](../S3M1_Task_1/README.html) | [S3M2 - Task 2](../S3M2_Task_2/README.html)     

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