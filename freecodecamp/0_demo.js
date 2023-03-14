import {print} from './module.js'

let count=0;
function cc(card) {
  // Only change code below this line
    switch (card){

    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;

    case 9:
    case 8:
    case 7:
    // count++;
    break;

    case "K":
    case "Q":
    case "J":
    case "A":
    case 10:
    count-=1;
    break;

    }

    if(count>0){return count + " Bet";}
    if(count<=0){return count + " Hold";}

}

print(cc(2));
print(cc(3));
print(cc(7));
print(cc('K'));
print(cc('A'));