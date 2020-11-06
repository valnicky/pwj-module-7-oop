/**
 * Create a keydown listener to track what keys are hit
 * Create a Beat class to represent the beat object in utils.js
 * Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 *  Button pt1: Initialize color and element values
 *  Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 *  Button pt3: Complete select function to set the color and shadow of button upon pressing
 *  Button pt4: Call the select() function upon key press ;)
 *  Button pt5: Add transition for button selection
 *  Button pt6: Remove the button style upon transition end | Use deselect function
 * Complete all button instances with the following colors
 *  Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
    65: {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button("#00fffe", 65)
    },
    83: {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("#00fffe", 83)
    },
    68: {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button("#00fffe", 68)
    },
    70: {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button("#ff00ff", 70)
    },
    71: {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button("#ff00ff", 71)
    },
    72: {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("#ff00ff", 72)
    },
    74: {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#ff00ff", 74)
    },
    75: {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button("#ffffff", 75)
    },
    76: {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
         button: new Button("#ffffff", 76)
    },
};

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
    let keyCode = event.keyCode;
    if (keyCode in beats) {
        let keyPress = beats[keyCode];
        keyPress.beat.play();
        keyPress.button.select();
    }
}

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */
document.addEventListener('keydown', triggerBeat);