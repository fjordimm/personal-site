import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import TextContent from "../components/TextContent";
import midiChordPracticeThumbnail from "../res/images/midiChordPractice/piano.png";

export default function Projects() {
    return (
        <TextContent>
            <h1>Projects</h1>
            <CardGrid>
                <Card name="Midi Chord Practice" href="/projects/midiChordPractice" image={midiChordPracticeThumbnail}></Card>
            </CardGrid>
        </TextContent>
    );
}