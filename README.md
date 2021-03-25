# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Y] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Y] Game buttons each light up and play a sound when clicked. 
* [Y] Computer plays back sequence of clues including sound and visual cue for each button
* [Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Y] User wins the game after guessing a complete pattern
* [Y] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Y] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Y] More than 4 functional game buttons
* [Y] Playback speeds up on each turn
* [Y] Computer picks a different pattern each time the game is played
* [Y] Player only loses after 3 mistakes (instead of on the first mistake)
* [N] Game button appearance change goes beyond color (e.g. add an image)
* [N] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [Y] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [Y] List anything else that you can get done to improve the app!
I believe it would be fun to implement multiple input or a lose counter or maybe even multiplayer.
## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](http://g.recordit.co/XlXIyn2A6E.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used help from websites like stackoverflow and w3schools. I also looked up documentation for unfamiliar keywords on https://developer.mozilla.org/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I had some difficulty in implementing the randomized pattern. I had written a rough psuedocode which I believe came in handy. I had to work with a couple of seg faults at first
as I incorrectly implemented the function. While the function was easy to implement, I believe I was confused on how the Math.random worked. So instead of multiplying with the largest
number of buttons, I left it as a fault. I then used the developer tools to check my log. From there, I found out my mistakes and was able to figure out how to change these 
massive doubles to ints. I multiplied the result with a whole number and then add 1 to it as I used Math.floor to strictly use integers. Next, the question was where to call this 
function. It would seem obvious to call it in the startGame function, but I had to make sure that it was being called only once in the whole code. If it were being called twice it would
cause it to randomize the pattern and thereby creating a mismatch every time a button is pressed.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I really enjoyed coding this project and aspire to create many more websites such as this one. I had a few questions about the webdev after completion. Some of them are:
a) What are considered the latest technologies in the field of web development and which system would you recommend to a novice?
b) I would love to get some constructive feedback/criticsm on my implementation. It would be immensely helpful to get an expert's opinion on it.
c) I have learned a bit of django and would like to know if that would be helpful in the field of webdev.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
 I had quite the challenge in figuring out the countdown timer. I looked up the javascript documentation to learn more about the settimeout and setInterval keywords. I easily overcame the implementation
 but I believe the real challenge was where to place the function and when to call it. One of the biggest problems was the timer going off when the computer was giving out the clues.
 I tried multiple different methods to solve the issue: trying to set a global variable and also increasing the delay. However, It did not work as I declared the function as a value for a global var
 I believe that given a bit more time, I should be able to figure the issue out.


## License

    Copyright Anubrat Patnaik

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
