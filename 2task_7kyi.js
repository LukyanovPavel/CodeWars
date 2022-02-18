/*

Name: Evens and Odds

This kata is about converting numbers to their binary or hexadecimal representation:

    If a number is even, convert it to binary.
    If a number is odd, convert it to hex.
    Numbers will be positive. The hexadecimal string should be lowercased.*/

const evensAndOdds = (n) => n%2?n.toString(16):n.toString(2)

/*-------------------------------------------------------------------------------------------------*/

/*
Name: Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's
length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s)
{
    if(s.length % 2 === 0) {
        return s[Math.round(s.length/2 - 1)] + s[Math.round(s.length/2)]
    } else {
        return s[Math.floor(s.length/2)]
    }
}