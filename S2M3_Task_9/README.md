---
layout: home
title: S2M3 - Task 9
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

An odometer palindrome is the when the mileage on your odometer is the same when the digits are reversed. For example, `123321`.

Assume your odometer is 6 digits and does not show `10ths` of miles/kilometers.

The question is, for a given current odometer reading, when is the next odometer palindrome?

If the odometer is currently at a palindrome, we're still interested in the next one.

The input is an integer, but the result should be a string padding with leading zeros to 6 places.

**Example**

Input:
```
current = 37
```
-   Output:
```
"001100"
```
Input:
```
current = 123320
```
-   Output:
```
"123321"
```
Input:
```
current = 999999
```
-   Output:
```
"000000"
```
**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer current**

    The current odometer reading.

    *Constraints*

        0 <= current <= 999999

* **[output] string**

    The odometer reading of the next palindrome padded with leading zeros to 6 places.

* **alternative/solution**    

    [Home - Bloomtech](../../code-signal-arcade-bloomtech/README.html) 
    
    [S2M3 - Task 8](../S2M3_Task_8/README.html) | [S2M4 - Task 1](../S2M4_Task_1/README.html) 

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