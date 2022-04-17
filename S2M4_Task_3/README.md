---
layout: home
title: S2M4 - Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------
Write a function that moves a "window" over an array, processing the values under the window as it goes.

For example, a window of size `3` moving across an array of length `9` might look like this for the first 3 moves (window is the bar over the values):

```
_____
 6 2 8 3 7 9 1 0 5    Window over 6,2,8

   _____
 6 2 8 3 7 9 1 0 5    Window over 2,8,3

     _____
 6 2 8 3 7 9 1 0 5    Window over 8,3,7
```

Your goal is to return an array of averages of the values under the window as it moves.

**Example**

Input:
```
a == [20, 64, 73, 58, 74]
window_size == 4
```
-   Output:
```
[53.75, 67.25]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

    *Constraints*

        0 < window_size <= a.length

* **[input] integer window_size**

    The window size.

    *Constraints*

        1 < window_size <= a.length

* **[output] array.float**

    The average values under the window as it moves.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M4 - Task 2](../S2M4_Task_2/README.html) | [S2M4 - Task 4](../S2M4_Task_4/README.html) 

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