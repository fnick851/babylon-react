import React from "react"
import { Link } from "@reach/router"

export default () => {
    return (
        <nav>
            <ol>
                <li>
                    <Link to="first-step">First Step</Link>
                </li>
                <li>
                    Shapes:
                    <ol>
                        <li>
                            <Link to="shapes/box">Box</Link>
                        </li>
                        <li>
                            <Link to="shapes/plane">Plane</Link>
                        </li>
                        <li>
                            <Link to="shapes/ground">Ground</Link>
                        </li>
                    </ol>
                </li>
            </ol>
        </nav>
    )
}
