---
layout: home
title: S3M3 - Task 6
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given a list and a value, append the value to the end of the list.

You have to wrap the value into a `ListNode()` object.

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

Return a reference to the head of the list.

**Example**

Input:

```
a == 1 -> 2 -> 3
n = 99
```

-   Output:

```
1 -> 2 -> 3 -> 99
```

Shown in the results visually as:

```
[1, 2, 3, 99]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] linkedlist.integer a**

    The existing list.

* **[input] integer n**

    The new value to append to the end of the list.

* **[output] linkedlist.integer**

    The linked list with the value appended.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S3M3 - Task 5](../S3M3_Task_5/README.html) | [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 

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