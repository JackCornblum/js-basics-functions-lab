// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let distance;
    if (street > 42) {
        distance = street - 42;
        return distance;
    }
    else {
        distance = 42 - street;
        return distance;
    }
}

distanceFromHqInBlocks(43);

function distanceFromHqInFeet(block) {
    let distance = 264 * distanceFromHqInBlocks(block);
    return distance;
}

distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        let distance = (start - end) * 264;
        return distance;
    }
    else {
        let distance = (end - start) * 264;
        return distance;
    }
}

function calculatesFarePrice(start, end) {
    distanceTravelledInFeet(start, end);
    let farePrice;

    if (distanceTravelledInFeet(start, end) > 2500) {
        return 'cannot travel that far';
    }
    else if (distanceTravelledInFeet(start, end) > 2000) {
        farePrice = 25;
        return farePrice;
    }
    else if (distanceTravelledInFeet(start, end) > 400) {
        farePrice = (distanceTravelledInFeet(start, end) - 400) * .02;
        return farePrice;
    }
    else {
        farePrice = 0;
        return farePrice;
    }
}