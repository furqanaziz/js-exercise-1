# Javascript   Coding   Exercise # 1

## Question 1

Please refer to [question-1.json](https://github.com/furqanaziz/js-exercise-1/blob/master/question-1.json) file for looking at the `JSON` representation of given digraph tree.

## Question 2, 3

Question 2 and 3 are dependent on each other so I have performed them together. For mock server to make AJAX call I have created a [server.js](https://github.com/furqanaziz/js-exercise-1/blob/master/server.js) file. You have to run `$ node server.js` on your terminal before testing. Here are the instructions to test:

1- Run the server on terminal `$ node server.js`. This needs nodejs 6+ installed on your computer.

2- Go to the code folder (which you have cloned from this repo) and right click on [question-2-3.html](https://github.com/furqanaziz/js-exercise-1/blob/master/question-2-3.html) file and open with browser.

3- Your browser page will show a form having one input field + button with AJAX url auto populated. You just need to click `fetch` button to trigger the AJAX call. If your server is running then a box below the form will show the fetched JSON. When JSON is fetched, another field + button to search node by id will appear just under the fetch field to test Question # 3.

**For solution of question # 2 please refer to [question-2-3.js#L43-L57](https://github.com/furqanaziz/js-exercise-1/blob/b1bc9e3dff288e5f25a0971c2ec112fe85ec99ba/question-2-3.js#L43-L57)**

**For solution of question # 3 please refer to [question-2-3.js#L59-L86](https://github.com/furqanaziz/js-exercise-1/blob/b1bc9e3dff288e5f25a0971c2ec112fe85ec99ba/question-2-3.js#L59-L86)**

### Files involved in Question 2, 3

1- [server.js](https://github.com/furqanaziz/js-exercise-1/blob/master/server.js) Containing server side AJAX call handler.

2- [question-2-3.html](https://github.com/furqanaziz/js-exercise-1/blob/master/question-2-3.html) Containing visuals HTML for browser to test.

3- [question-2-3.js](https://github.com/furqanaziz/js-exercise-1/blob/master/question-2-3.js) Containing the JS side logic and actual solution.

4- [question-2-3.css](https://github.com/furqanaziz/js-exercise-1/blob/master/question-2-3.css) Very precise CSS style to look HTML page pretty.


## Question 4

Question 4 was requiring some validation logic so I created separate validator in JS side. Here are the instructions to test:

1- Go to the code folder (which you have cloned from this repo) and right click on [question-4.html](https://github.com/furqanaziz/js-exercise-1/blob/master/question-4.html) file and open with browser.

2- Your browser page will show a form having all input fields in question. You can click on `OK` or `Cancel` button to trigger the code. I have not added any logic on `keyup` or `blur` events of the input fields because these were not mentioned in the problem # 4 of the given pdf. Currently events are handled at `button clicks` only.

### Files involved in Question 4

1- [question-4.html](https://github.com/furqanaziz/js-exercise-1/blob/master/question-4.html) Containing visuals HTML for browser to test.

2- [question-4.js](https://github.com/furqanaziz/js-exercise-1/blob/master/question-4.js) Containing the JS side logic and actual solution.

3- [question-4.css](https://github.com/furqanaziz/js-exercise-1/blob/master/question-4.css) Very precise CSS style to look HTML page pretty.

**PS: I tried my best to perform well alongwith explaining things in this README.md, but still in case of any convinience I apologize in advance.**
