import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import TextContent from "../components/TextContent";
import personalBackground from "../res/images/personal_background.png";

export default function Projects() {
    return (
        <TextContent>
            <h1>Projects</h1>
            <CardGrid>
                <Card name="Midi Chord Practice" href="/projects/midiChordPractice" image={personalBackground}></Card>
            </CardGrid>
        </TextContent>
    );
}