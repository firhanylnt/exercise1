// Problem: 
//  1. Write a code to find area of rectangle.
// Hint:
//  1. Find out how to count area of rectangle
//  2. The formula is length x width
// Solution:
//  1. Define variable and assign value to variable
        let _length: number = 5;
        let width: number = 3;

//  2. Implement the formula
        const area1 = _length * width;
        console.log(area1);

// Problem: 
//  2. Write a code to find perimeter of rectangle.
// Hint:
//  1. Find out how to count perimeter of rectangle
//  2. The formula is (2 x length) + (2 x width)

// Solution:
//  1. Define variable and assign value to variable
        _length = 5;
        width = 3;
//  2. Implement the formula
        const perimeter = (2 * _length) + (2 * width);
        console.log(perimeter);

// Problem: 
//  3. Write a code to find diameter, circumference and area of a circle.
// Hint:
//  1. Find out the formulas
//  2. Use built-in object math from javasript to get PI = Math.PI or use 3.14159
//      - diameter of a circle = 2 x radius
//      - circumference of a circle = 2 x Math.PI x radius
//      - area of a circle = Math.PI x radius x radius
// Solution:
//  1. Define variable and assign value to variable
        const radius: number = 5;
        const PI: number = Math.PI;
        let output: string;
//  2. implement the formula
        const diameter: number = 2 * radius;
        const circumference: number = 2 * PI * radius;
        const areaCircle: number = PI * radius * radius;
        output = `diameter = ${diameter}, circumference = ${circumference.toFixed(4)}, area = ${areaCircle.toFixed(4)}`
        console.log(output);

// Problem:
//  4. Write a code to find angles of triangle if two angles are given.
// Hint:
//  1. Find out the formula
//  2. A triangle has 3 angles and the sum of the angles in a triangle is 180 degrees
//  3. The formula is (sum angles - angles a - angles b = angles c)
// Solution:
//  1. Define variable and assign value to variable
        const sumAngles: number = 180
        const angles_a: number = 80;
        const angles_b: number = 65;
        let angles_c: number;
//  2. Implement the formula
        angles_c = sumAngles - angles_a - angles_b;
        console.log(angles_c);

// Problem:
//  5. Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Hint:
//  1. Find out the formula
//  2. Define total days in year = 365
//  3. Define total days in month = 30
//  4. Use built-in object Math.floor to rounding down the number
//  5. The formula is
//      - years = Math.floor(days / total days in year)
//      - remaining days = days % total days in year
//      - month = Math.floor(remaining days / total days in month)
//      - days = remaining days % total days in month

// Solution:
//  1. Define variable and assign value to variable
        let days: number = 400;
        // days = 366;
        const daysInMonth: number = 30;
        const daysInYear: number = 365;
        let _years: number;
        let _months: number;
        let _days: number;
        let remainingDays: number;
        let result: string;
//  2. implement the formula
        // Get years
        _years = Math.floor(days / daysInYear);
        console.log(_years);
        // Get remaining days after years
        remainingDays = days % daysInYear;
        console.log(remainingDays);
        // Get month
        _months = Math.floor(remainingDays / daysInMonth);
        console.log(_months.toFixed());
        // Get days
        _days = remainingDays % daysInMonth
        console.log(_days.toFixed());
        // concat year, month and days
        result = `${_years} year, ${_months.toFixed()} month, ${_days.toFixed()} days`;
        console.log(result);
// Problem:
//  6. Write a code to get difference between dates in days.
// Hint:
//  1. Find out the formula
//  2. Define start date = 2024-01-20
//  3. Define end date = 2024-01-22
//  4. Use built-in object Date
//  5. The formula is
//      - calculate difference time in milliseconds (end date - start date) use getTime()
//      - convert milliseconds to days 
//      (difference time in millisecond / (millsecond to second * minutes of a day * hour of a day))

// Solution:
//  1. Define variable and assign value to variable
        const startDate: Date = new Date('2024-01-20');
        const endDate: Date = new Date('2024-01-22');
        let differenceTime: number;
        let differenceDays: number;
//  2. implement the formula
        // calculate difference time in milliseconds
        differenceTime = endDate.getTime() - startDate.getTime();
        console.log(differenceTime);
        // convert milliseconds to days
        differenceDays = differenceTime / (1000*3600*24);
        console.log(differenceDays);