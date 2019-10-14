import React, { useEffect, useRef } from "react"
import * as BABYLON from "babylonjs"

export default function FirsStep() {
    const canvasEl = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        // Generate the BABYLON 3D engine
        const engine = new BABYLON.Engine(canvasEl.current, true)
        // Create the scene space
        const scene = new BABYLON.Scene(engine)

        // Add a camera to the scene and attach it to the canvas
        new BABYLON.ArcRotateCamera(
            "Camera",
            Math.PI / 2,
            Math.PI / 2,
            2,
            new BABYLON.Vector3(0, 0, 5),
            scene
        ).attachControl(canvasEl.current as HTMLCanvasElement, true)
        // Add lights to the scene
        new BABYLON.HemisphericLight(
            "light1",
            new BABYLON.Vector3(1, 1, 0),
            scene
        )
        new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene)
        // Add and manipulate meshes in the scene
        BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene)

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
