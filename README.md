# DAPP for Multi Level Marketring with different level and commissoin structure

A Solidity smart contract that allows any number of users to register through a Parent referral Address at Level 1 and subsequently move on to level 10 by adding more and more heirarchy under them driving to token sales.

Whenever a Purchase of Token happens, the purchaser gets the desired tokens and the complete Parent heirarchy till Level 10 gets commission as per below defined levels and commission structure.

<table>
<tr><td>level</td><td>Token Sale Volume</td><td>commission</td></tr>
<tr><td>1</td><td>0</td><td>50</td></tr>
<tr><td>2</td><td>1000</td><td>60</td></tr>
<tr><td>3</td><td>10000</td><td>65</td></tr>
<tr><td>4</td><td>100000</td><td>70</td></tr>
<tr><td>5</td><td>200000</td><td>75</td></tr>
<tr><td>6</td><td>400000</td><td>80</td></tr>
<tr><td>7</td><td>800000</td><td>85</td></tr>
<tr><td>8</td><td>1600000</td><td>90</td></tr>
<tr><td>9</td><td>3200000</td><td>95</td></tr>
<tr><td>10</td><td>6400000</td><td>100</td></tr>
</table>

Whwnever the Child Heirarchy of a parent reaches to certain benchmark, then the parent level and commission is increased.

A sample Web page is also created that shows different functions like purchase, withdraw, view profile etc with web3 integration with the DAPP.
