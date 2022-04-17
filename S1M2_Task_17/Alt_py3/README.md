---
layout: home
title: S1M2 - Task 17 - py3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Write a function that takes an amount to withdraw from an account, along with the current balance.

If there isn't enough in the account to make the withdrawal, return -1. Otherwise return the remaining balance after the withdrawal.

**Example**

Input:
```
amount == 100
balance == 300
```
-   Output:
```
200
```
Input:
```
amount == 50
balance == 25
```
-   Output:
```
-1
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer amount**

    An array of positive integers.

    *Guaranteed constraints:*

    <code type='math/tex'>1 \leq value \leq 10^7</code>.

* **[input] integer balance**

    An array of positive integers.

    *Guaranteed constraints:*

    <code type='math/tex'> 1 \leq value \leq 10^9 </code>.

* **[output] integer**

    The remaining balance, or -1 if you don't have that much in your account.

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