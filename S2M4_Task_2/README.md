---
layout: home
title: S2M4 - Task 2
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

And the last window in that example would be 1,0,5.

Your goal is to return an array of true/false values. True if all the numbers under the window are odd (not evenly divisible by 2), otherwise false.

Try to do this without creating any new arrays except for the True/False result array.

**Example**

Input:
```
a == [1, 3, 5, 2, 7, 9, 1]
window_size == 3
```
-   Output:
```
[true,false,false,false,true]
```
Input:
```
a == [1,1,2,2,3,3]
window_size == 2
```
-   Output:
```
[true,false,false,false,true]
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

        0 < window_size <= a.length

* **[output] array.boolean**

    An array of true/falses: true if the window at a particular point is covering all odds, otherwise false.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M4 - Task 1](../S2M4_Task_1/README.html) | [S2M4 - Task 3](../S2M4_Task_3/README.html) 

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