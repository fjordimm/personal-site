import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import TextContent from "../components/TextContent";
import terrainGenerationThumbnail from "../res/images/terrainGeneration/fig2.png";
import midiChordPracticeThumbnail from "../res/images/midiChordPractice/fig1.png";

export default function Projects() {
    return (
        <TextContent>
            <h1>Projects</h1>
            <CardGrid>
                <Card name="Terrain Generation" href="/projects/terrainGeneration" image={terrainGenerationThumbnail}></Card>
                <Card name="Midi Chord Practice" href="/projects/midiChordPractice" image={midiChordPracticeThumbnail}></Card>
            </CardGrid>
        </TextContent>
    );
}