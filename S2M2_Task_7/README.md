---
layout: home
title: S2M2 - Task 7
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Run-length encoding algorithm (RLE) works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence.

You need to implement an algorithm that applies the RLE to a given string.

**Example**

For `inputString = "abbaaaac"`, the output should be `solution(inputString) = "1a2b4a1c"`.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string inputString**

    A string consisting of lowercase English letters only.

    *Guaranteed constraints:*

        1 ≤ inputString.length ≤ 1000.

* **[output] string**   

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M2 - Task 6](../S2M2_Task_6/README.html) | [S2M3 - Task 1](../S2M3_Task_1/README.html)     

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