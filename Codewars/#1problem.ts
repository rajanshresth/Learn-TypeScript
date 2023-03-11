/* There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array! */

function betterThanAverage(classPoints:number[], yourPoints:number):boolean {
    // Your code here
    let classAvg = classPoints.reduce((a,b)=>a+b)/classPoints.length;

    return yourPoints > classAvg ? true : false;
    
    }

        let classPoints = [2,3,4,5,6,7,8,9,10];
        let yourPoints = 8;
        console.log(betterThanAverage(classPoints, yourPoints))

