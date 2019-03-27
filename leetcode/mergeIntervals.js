/* Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping. */

function Interval(start, end) { // Interval constructor
    this.start = start;
    this.end = end;
}

function mergeIntervals(intervals) {
    if (!intervals.length) return intervals // if intervals is empty, return it
    /* Sort the intervals by checking if the start of each item is not equal.
        If they are not equal, subtract the start of both. Otherwise, subtract the end of both  */
    intervals.sort((a, b) => (a.start !== b.start ? a.start - b.start : a.end - b.end))
    /* Set prev to the first element in intervals */
    let prev = intervals[0]
    let result = [prev] // Set result to be an array with just prev in it for now
    for (let i = 0; i < intervals.length; i++) { // Loop through intervals
        /* The goal of the loop is to iterate through intervals and change the value
        of prev in place thereby changing it in the results array.
        Everytime the current is still within the interval of prev, we update prev.end.
        If it isn't, we push in a new prev that we may change in place.  */
        let curr = intervals[i] // Set curr to intervals at i
        if (curr.start <= prev.end) { /* If the start of curr is less than or equal to
            the end of prev, set prev.end to equal the maximum of the end of curr and the end of
            prev */
            prev.end = Math.max(prev.end, curr.end)
        } else {
            /* Else, we push curr into result and set prev to curr. */
            result.push(curr)
            prev = curr
        }
    }
    return result
}
