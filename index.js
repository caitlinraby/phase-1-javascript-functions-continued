// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(workActivity="go to the office") {
    return `This Monday, I will ${workActivity}.`;
}

function wrapAdjective(parameter1="*") {
    return function(adj="special") {
        return `You are ${parameter1}${adj}${parameter1}!`;
    }
}