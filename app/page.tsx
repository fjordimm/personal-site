
import photo1 from "./res/images/photo1.jpeg";

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-4">Howdy</h1>
            <p className="text-xl text-gray-600 mb-8">
                Shmowdy.
            </p>
            <img src={photo1.src}></img>
        </div>
    );
}
