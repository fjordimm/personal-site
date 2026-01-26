import fig1 from "../../../res/images/midiChordPractice/fig1.png";

export default function MidiChordPractice() {
    return (
        <>
            <h1>Midi Chord Practice</h1>

            <p>GitHub Repository: <a href="https://github.com/fjordimm/random-chord-generator">github.com/fjordimm/random-chord-generator</a></p>
            <p>Active Site: <a href="https://fjordimm.github.io/random-chord-generator">fjordimm.github.io/random-chord-generator</a></p>

            <br></br>
            <h2>Overview</h2>
            <img src={fig1.src} width="50%"></img>
            <p>
                I wanted to get better at quickly identifying the notes in a chord and playing them on piano, so I made a simple website in HTML, CSS, and JavaScript to help me practice.
                It generates random chord names and, given midi input, displays key presses in green if correct, and in red if incorrect.
            </p>

            <p>
                You can certainly use this site for your own practice; I don't plan on taking it down (it uses GitHub Pages).
                Make sure to reload the page if you connect your midi device after loading the site for it to work properly.
            </p>

            <br></br>
            <h2>Details</h2>
            <p>
                To generate a new chord, press the Generate New button or tap your sustain pedal if you have one on your midi keyboard.
                The main idea is to use a midi keyboard to practice, but you can also click the keys on the virtual keyboard displayed on the website.
            </p>
            <p>
                I have found the values that I've set to be good, but you can adjust the probability of each type of chord with the sliders.
            </p>

            <br></br>
            <h2>Future Features</h2>
            <p>
                Right now, the probability sliders reset to the default when the page is reloaded.
                A simple solution would be to save the values as cookies.
            </p>
            <p>
                One thing I might want to implement is generating relative chords instead of absolute chords.
                So, you would set the key and it would generate Roman-numeral chords.
            </p>
        </>
    );
}
