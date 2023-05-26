# Lab 8 - Starter
Chengtao Wu

1. I would fit my automated tests within a github action that runs whenever code is pushed, because the tests will run on the code whenever pushes are made. In comparison, manual testing takes too much time; testing after all development is completed would be difficult to debug.
   
2. **No**, I would not use an end to end test to check if a function is returning the correct output.
   
3. **No**, because the message feature interacts with other features in the application, so it cannot be unit tested. End to end test would be better when testing the message feature.
   
4. **Yes**, because the max message length feature is not closely connected to other features in the application, so it can be unit tested.
