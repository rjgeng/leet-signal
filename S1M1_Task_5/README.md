---
layout: home
title: S1M1 - Task 5
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](../S1M1_Task_4/README.md) | [Next](../S1M1_Task_6/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

From the year you were born until now is a certain number of years. What year was it that many years before your birth year?

For example, if a person was born in 2000 and it is now 2021, their "flip year" would be 1979. (Because they are 21 years old, and there are 21 years between 1979 and 2000.)

**Example**

Input:
```
birth_year = 2000
current_year = 2021
```
-   Output:
```
1979
```
Input:
```            
birth_year = 1932
current_year = 1999
```
-   Output:
```
1865
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer birth_year**

    The year the person was born

    *Constraints*

    1 <= birth_year <= current_year <= 3000

* **[input] integer current_year**

    The current year

    *Constraints*

    1 <= birth_year <= current_year <= 3000

* **[output] boolean**

    The flipyear--this could potentially be less than 1


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