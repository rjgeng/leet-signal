---
layout: home
title: S3M3 - Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given a list, return length of the list--i,e, the number of nodes in the list.

You do not need to uncomment the `ListNode` code in the header. That's just there for your reference.

Note the the tests will show the linked lists as if they are arrays. This is just the visual representation; under the hood, it's a linked list with those values.

**Example**

Input:
```
a == 1 -> 2 -> 3
```
-   Output:
```
3
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] linkedlist.integer head**

    The input list.

* **[output] integer**

    The number of nodes in the list.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S3M3 - Task 1](../S3M3_Task_1/README.html) | [S3M3 - Task 3](../S3M3_Task_3/README.html)

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