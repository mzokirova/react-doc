/* useLayoutEffect is a version of useEffect that fires
 before the browser repaints the screen.
 */

useEffect(() => {
    console.log("USE EFFECT FUNCTION TRIGGERED");
});
useLayoutEffect(() => {
    console.log("USE LAYOUT EFFECT FUNCTION TRIGGERED");
});

/* Even though the useLayoutEffect Hook is placed after the 
useEffect Hook, the useLayoutEffect Hook is triggered first! 
This is what it looks like  The useLayoutEffect function is triggered
synchronously before the DOM mutations are painted. However, the useEffect function is called after the DOM mutations are painted.:*/

