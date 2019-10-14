import React, { useEffect, useRef } from "react"
import * as BABYLON from "babylonjs"
import "./App.css"

const App: React.FC = () => {
    const canvasEl = useRef(null)

    useEffect(() => {
        const engine = new BABYLON.Engine(canvasEl.current, true) // Generate the BABYLON 3D engine

        /******* Add the create scene function ******/
        const createScene = () => {
            // Create the scene space
            const scene = new BABYLON.Scene(engine)

            // Add a camera to the scene and attach it to the canvas
            const camera = new BABYLON.ArcRotateCamera(
                "Camera",
                Math.PI / 2,
                Math.PI / 2,
                2,
                new BABYLON.Vector3(0, 0, 5),
                scene
            )
            camera.attachControl(
                (canvasEl.current as unknown) as HTMLElement,
                true
            )

            // Add lights to the scene
            new BABYLON.HemisphericLight(
                "light1",
                new BABYLON.Vector3(1, 1, 0),
                scene
            )
            new BABYLON.PointLight(
                "light2",
                new BABYLON.Vector3(0, 1, -1),
                scene
            )

            // Add and manipulate meshes in the scene
            BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene)

            return scene
        }
        /******* End of the create scene function ******/

        var scene = createScene() //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function() {
            scene.render()
        })

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function() {
            engine.resize()
        })
    })

    return (
        <canvas ref={canvasEl} id="renderCanvas" touch-action="none"></canvas>
    ) //touch-action="none" for best results from PEP
}

export default App
