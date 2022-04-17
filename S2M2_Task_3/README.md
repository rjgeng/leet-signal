---
layout: home
title: S2M2 - Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

This function accepts an array. It should return true if the array elements read the same forward and backward, i.e. if the array is a palindrome.

An empty array is a palindrome.

**Example**

Input:
```
a == [0, 1, 2, 1, 0]
```
-   Output:
```
true
```
Input:
```
a == [1, 2, 3, 4]
```
-   Output:
```
false
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

* **[output] boolean**

    True if the array is a palindrome.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M2 - Task 2](../S2M2_Task_2/README.html) | [S2M2 - Task 4](../S2M2_Task_4/README.html)     

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