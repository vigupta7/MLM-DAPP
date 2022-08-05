# DAPP for Multi Level Marketring with different level and commissoin structure

A Solidity smart contract that allows any number of users to register through a Parent referral Address at Level 1 and subsequently move on to level 10 by adding more and more heirarchy under them driving to token sales.

Whenever a Purchase of Token happens, the purchaser gets the desired tokens and the complete Parent heirarchy till Level 10 gets commission as per below defined levels and commission structure.

level	Token Sale Volume	commission %
1	    0	                50
2	    1000	            60
3	    10000	            65
4	    100000	            70
5	    200000	            75
6	    400000	            80
7	    800000	            85
8	    1600000	            90
9	    3200000	            95
10	    6400000	            100


Whwnever the Child Heirarchy of a parent reaches to certain benchmark, then the parent level and commission is increased.

A sample Web page is also created that shows different functions like purchase, withdraw, view profile etc with web3 integration with the DAPP.