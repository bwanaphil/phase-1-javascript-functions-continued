// code your solution here
function saturdayFun(activity1="roller-skate"){

    return `This Saturday, I want to ${activity1}!`;
}

function mondayWork(activity1="go to the office"){

    return `This Monday, I will ${activity1}.`;
}
function wrapAdjective(activity1="*"){
    return function wrap1(activit1="special"){
        return `You are ${activity1}${activit1}${activity1}!`;
    }
    //function wrap2(activity2="||"){
        //return function wrap1(activit1="special"){
            //return `${activity2} You are ${activit1} ${activity2}`;
        }
    

