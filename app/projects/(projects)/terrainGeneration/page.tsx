import fig1 from "../../../res/images/terrainGeneration/fig1.png";
import fig2 from "../../../res/images/terrainGeneration/fig2.png";
import fig3 from "../../../res/images/terrainGeneration/fig3.png";
import fig4 from "../../../res/images/terrainGeneration/fig4.png";

export default function TerrainGeneration() {
    return (
        <>
            <h1>Terrain Generation</h1>

            <p>GitHub Repository: <a href="https://github.com/fjordimm/unity-terrain-gen">github.com/fjordimm/unity-terrain-gen</a></p>

            <br></br>
            <h2>Overview</h2>
            <p>
                I've been working on generating terrain (in Unity as of right now, but I might switch to Three.js).
                You give it a ℝ×ℝ→ℝ function to map x and z coordinates to elevation, meaning you probably want to use a gradient noise algorithm (I use OpenSimplexNoise).
                Then you give it an object in the world to treat as the player, and it will generate terrain within a certain distance of that object, and then generate more terrain if you move it.
            </p>

            <br></br>
            <h2>Chunks</h2>
            <p>
                It generates terrain in chunks, since there has to be an object in the world for the mesh to be bound to, and creating one giant mesh for a single object would be unfeasible.
                Here's an example of one chunk:
            </p>
            <img src={fig1.src} width="50%"></img>
            
            <br></br>
            <h2>LODs</h2>
            <p>
                To have detailed terrain while having long render distance, you have to implement Levels of Detail.
                I've gotten it to work pretty well, but there's still more optimizations I can do.
                Here's an example showing how far it can render on my laptop with reasonable frames (for reference, the little white capsule on the top of the mountain in the foreground is the player):
            </p>
            <img src={fig2.src} width="75%"></img>

            <br></br>
            <h2>Normal Maps</h2>
            <p>
                Right now, it just renders terrain by creating a mesh and coloring each square (pair of adjacent 4 vertices).
                A major improvement I will implement will be creating a normal map for each square by using the given heightmap function.
                Then both the shading and the texturing can have more detail than the mesh without taking up as much GPU.
                Here's an example of a normal map:
            </p>
            <img src={fig3.src} width="25%"></img>

            <br></br>
            <h2>Grass</h2>
            <p>
                I've started making a shader for the terrain that displays grass.
                It looks fine for a single chunk (seen in the image below), but the big challenge will be making it look seemless against lower LODs that don't display grass (since displaying grass on all the terrain is too slow).
            </p>
            <img src={fig4.src} width="50%"></img>
        </>
    );
}
