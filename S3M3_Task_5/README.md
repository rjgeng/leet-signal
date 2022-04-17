---
layout: home
title: S3M3 - Task 5
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Insert a new value at the head of a linked list.

You have to wrap the value `n` into a `ListNode()` object.

**JavaScript:**
```
const new_node = new ListNode(n);
```
**Python:**
```
new_node = ListNode(n)
```
You do not need to uncomment the `ListNode` code in the header. That's just there for your reference.

Note the the tests will show the linked lists as if they are arrays. This is just the visual representation; under the hood, it's a linked list with those values.

Return a reference to the new head of the list.

**Example**

Input:
```
n == 99
a == 1 -> 2 -> 3
```
-   Output:
```
99 -> 1 -> 2 -> 3
```
Shown in the results visually as:
```
[99, 1, 2, 3]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The value to insert at the head of the linked list

* **[input] linkedlist.integer a**

    Existing linked list

* **[output] linkedlist.integer**

    The linked list with the new head attached.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S3M3 - Task 4](../S3M3_Task_4/README.html) | [S3M3 - Task 6](../S3M3_Task_6/README.html)

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