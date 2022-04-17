---
layout: home
title: S2M4 - Task 8
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

You have a string `s`. Split `s` into the minimum possible number of `increasing` substrings. A substring is considered to be `increasing` when the next symbol in the substring is also next in the English alphabet. This is case sensitive, i.e. 'b' is next for 'a' but 'C' is not next for 'b'. Return an array of these substrings.

**Example**

For `s = "ABCDEFFDEfghCBA"`, the output should be
`solution(s) = ["ABCDEF", "F", "DE", "fgh", "C", "B", "A"]`.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    A string composed only of English letters.

    *Guaranteed constraints:*

        1 ≤ s.length ≤ 10^4.

* **[output] array.string**

    An array of substrings.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M4 - Task 7](../S2M4_Task_7/README.html) | [S3M1 - Task 1](../S3M1_Task_1/README.html) 

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