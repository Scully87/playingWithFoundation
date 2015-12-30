// JavaScript Document

// config
var currentLoop = 0;
var totalLoops = 0;
var endFrameDelay = 4;
var useReplayBtn = true;

// content
var container;
var bgImage;
var cake;
var firstContainer;
var secondContainer;
var endFrameContainer;
var btnReplay;

TweenLite.lagSmoothing(0); // stops tweenlite animation messing up when switching between browser tabs


startAd = function()
{
    // content
    container = document.getElementById("container");
    bgImage = document.getElementById("bgImage");
    cake = document.getElementById("cake");
    firstContainer = document.getElementById("firstContainer");
    secondContainer = document.getElementById("secondContainer");
    endFrameContainer = document.getElementById("endFrameContainer");
    btnReplay = document.getElementById("btnReplay");

    // activate btns
    btnReplay.addEventListener('click', btnReplay_clickHandler, false);
    btnReplay.addEventListener("mouseover", btnReplay_overHandler, false);
    btnReplay.addEventListener("mouseout", btnReplay_outHandler, false);

    // show Ad
    container.style.display = "block";

    showFrame(1);
}


function btnReplay_clickHandler()
{
    showFrame(1);
    console.log("btnReplay_clickHandler");
}

function btnReplay_overHandler()
{
    //console.log("btnReplay_overHandler");
    TweenLite.to(btnReplay, 0.4, {rotation:360, delay:0});
}

function btnReplay_outHandler()
{
    //console.log("btnReplay_outHandler");
    TweenLite.to(btnReplay, 0.2, {rotation:0, delay:0});
}


var holdFrame = function(frame, time) {
    var delay = time*1000;
    frameWaitTimer = window.setTimeout(function(){showFrame(frame);}, delay);
}


function showFrame(id) {
    tl = TweenLite
    switch(id) {

        case 1:
            resetBanner();

            tl.to(cake, 1, {opacity:1});
            holdFrame(2, 1.5);
            break;

        case 2:
            tl.to(secondContainer, 0, {opacity:1});
            tl.to(tickBox1, 0.2, {scaleX:1.2, scaleY:1.2, opacity:1, delay:0.6});
            tl.to(tickBox1, 0.2, {scaleX:0.8, scaleY:0.8, opacity:1, delay:0.8});
            tl.to(tickBox1, 0.2, {scaleX:1, scaleY:1, opacity:1, delay:1});
            tl.to(copy2, 0.2, {scaleX:1.1, scaleY:1.1, opacity:1, delay:0.6});
            tl.to(copy2, 0.2, {scaleX:0.9, scaleY:0.9, opacity:1, delay:0.8});
            tl.to(copy2, 0.2, {scaleX:1, scaleY:1, opacity:1, delay:1.0});

            tl.to(tickBox2, 0.2, {scaleX:1.2, scaleY:1.2, opacity:1, delay:1.4});
            tl.to(tickBox2, 0.2, {scaleX:0.8, scaleY:0.8, opacity:1, delay:1.6});
            tl.to(tickBox2, 0.2, {scaleX:1, scaleY:1, opacity:1, delay:1.8});
            tl.to(copy3, 0.2, {scaleX:1.1, scaleY:1.1, opacity:1, delay:1.4});
            tl.to(copy3, 0.2, {scaleX:0.9, scaleY:0.9, opacity:1, delay:1.6});
            tl.to(copy3, 0.2, {scaleX:1, scaleY:1, opacity:1, delay:1.8});

            tl.to(tickBox3, 0.2, {scaleX:1.2, scaleY:1.2, opacity:1, delay:2.2});
            tl.to(tickBox3, 0.2, {scaleX:0.8, scaleY:0.8, opacity:1, delay:2.4});
            tl.to(tickBox3, 0.2, {scaleX:1, scaleY:1, opacity:1, delay:2.6});
            tl.to(copy4, 0.2, {scaleX:1.1, scaleY:1.1, opacity:1, delay:2.2});
            tl.to(copy4, 0.2, {scaleX:0.9, scaleY:0.9, opacity:1, delay:2.4});
            tl.to(copy4, 0.2, {scaleX:1, scaleY:1, opacity:1, delay:2.6});

            tl.to(cursor, 0, {opacity:1});
            holdFrame(3, 3);
            break;

        case 3:
            tl.to(cursor, 0.8, {x:-146, y:75});
            tl.to(cursor, 0.1, {scaleX:0.7, scaleY:0.7, delay:0.9});
            tl.to(incorrect, 0.2, {scaleX:1.2, scaleY:1.2, opacity:1, delay:1.0});
            tl.to(cursor, 0.1, {scaleX:1, scaleY:1, delay:1.0});
            tl.to(incorrect, 0.2, {scaleX:0.8, scaleY:0.8, delay:1.2});
            tl.to(incorrect, 0.2, {scaleX:1, scaleY:1, delay:1.4});

            tl.to(cursor, 0.8, {x:-129, y:200, delay:1.6});
            tl.to(cursor, 0.1, {scaleX:0.7, scaleY:0.7, delay:2.4});
            tl.to(incorrect2, 0.2, {scaleX:1.2, scaleY:1.2, opacity:1, delay:2.5});
            tl.to(cursor, 0.1, {scaleX:1, scaleY:1, delay:2.5});
            tl.to(incorrect2, 0.2, {scaleX:0.8, scaleY:0.8, delay:2.7});
            tl.to(incorrect2, 0.2, {scaleX:1, scaleY:1, delay:2.9});

            tl.to(cursor, 0.6, {x:-140, y:133, delay:3.1});
            tl.to(cursor, 0.1, {scaleX:0.7, scaleY:0.7, delay:3.7});
            tl.to(correct, 0.2, {scaleX:1.2, scaleY:1.2, opacity:1, delay:3.8});
            tl.to(cursor, 0.1, {scaleX:1, scaleY:1, delay:3.8});
            tl.to(correct, 0.2, {scaleX:0.8, scaleY:0.8, opacity:1, delay:4});
            tl.to(correct, 0.2, {scaleX:1, scaleY:1, opacity:1, delay:4.2});

            tl.to(tickBox1, 0.5, {opacity:0, delay:5.4});
            tl.to(tickBox2, 0.5, {opacity:0, delay:5.4});
            tl.to(tickBox3, 0.5, {opacity:0, delay:5.4});
            tl.to(copy1, 0.5, {opacity:0, delay:5.4});
            tl.to(copy2, 0.5, {opacity:0, delay:5.4});
            tl.to(copy3, 0.5, {opacity:0, delay:5.4});
            tl.to(copy4, 0.5, {opacity:0, delay:5.4});
            tl.to(incorrect, 0.5, {opacity:0, delay:5.4});
            tl.to(incorrect2, 0.5, {opacity:0, delay:5.4});
            tl.to(correct, 0.5, {opacity:0, delay:5.4});
            tl.to(cursor, 0.5, {opacity:0, delay:5.4});
            holdFrame(4, 6);
            break;

        case 4:
            tl.to(cake, 0.5, {y:-66, delay:0});
            tl.to(equals, 0.5, {opacity:1, delay:0.9});
            tl.to(cubes, 0.25, {scaleX:1.075, scaleY:1.075, opacity:1, delay:0.9});
            tl.to(cubes, 0.25, {scaleX:0.925, scaleY:0.925, opacity:1, delay:1.15});
            tl.to(cubes, 0.25, {scaleX:1, scaleY:1, opacity:1, delay:1.4});
            tl.to(copy5, 0.25, {scaleX:1.075, scaleY:1.075, opacity:1, delay:1.0});
            tl.to(copy5, 0.25, {scaleX:0.925, scaleY:0.925, opacity:1, delay:1.15});
            tl.to(copy5, 0.25, {scaleX:1, scaleY:1, opacity:1, delay:1.4});
            tl.to(cake, 0.5, {opacity:0, delay:3.1});
            tl.to(equals, 0.5, {opacity:0, delay:3.1});
            tl.to(cubes, 0.5, {opacity:0, delay:3.1});
            tl.to(copy5, 0.5, {opacity:0, delay:3.1});
            holdFrame(5, 4);
            break;

        case 5:
            tl.to(endFrame1, 1.0, {opacity:1});
            tl.to(terms, 1.0, {opacity:1, delay:2.5});
            tl.to(btnReplay, 1.0, {opacity:1, delay:2.5});
            break;
    }
}

/**
 * function checks if banner should loop or show replay btn
 */
function checkForLooping()
{
    if(currentLoop < totalLoops) // loop baner
    {
        TweenLite.delayedCall(endFrameDelay, showFrame, [1]);
        currentLoop++;
    }
    else // show replay btn
    {
        if(useReplayBtn === true)
        {
            btnReplay.style.display = "block";
        }
    }
}


/**
 * function resets content on end frame to initial states
 */
function resetBanner()
{
    TweenLite.set(endFrame1, {opacity:0});
    TweenLite.set(terms, {opacity:0});
    TweenLite.set(btnReplay, {opacity:0});
    TweenLite.set(cake, {x:0, y:0, opacity:0});
    TweenLite.set(firstContainer, {opacity:1});
    TweenLite.set(thirdContainer, {opacity:1});
    TweenLite.set(tickBox1, {opacity:0});
    TweenLite.set(tickBox2, {opacity:0});
    TweenLite.set(tickBox3, {opacity:0});
    TweenLite.set(copy2, {opacity:0});
    TweenLite.set(copy3, {opacity:0});
    TweenLite.set(copy4, {opacity:0});
    TweenLite.set(cursor, {x:0, y:0, opacity:0});
    TweenLite.set(incorrect, {opacity:0});
    TweenLite.set(incorrect2, {opacity:0});
    TweenLite.set(correct, {opacity:0});
    TweenLite.set(equals, {opacity:0});
    TweenLite.set(copy5, {opacity:0});
    TweenLite.set(cubes, {opacity:0});
    TweenLite.set(copy1, {opacity:1});
}
