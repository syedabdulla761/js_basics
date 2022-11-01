var rotateString = function(s, goal) {
    return s.length==goal.length && (goal+goal).includes(s);
};
rotateString("abcde","cdeab");        //sample input
