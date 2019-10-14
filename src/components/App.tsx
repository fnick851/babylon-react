import "./App.css"

import React from "react"
import { Router, RouteComponentProps } from "@reach/router"
import Home from "./Home"
import FirstStep from "./Steps/FirstStep"
import BasicPage from "./BasicPage"
import Box from "./Steps/Shapes/Box"
import Plane from "./Steps/Shapes/Plane"
import Ground from "./Steps/Shapes/Groud"
import NotFound from "./NotFound"

const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

export default () => {
    return (
        <Router>
            <RouterPage path="/" pageComponent={<Home />} />
            <RouterPage
                path="first-step"
                pageComponent={<BasicPage child={<FirstStep />} />}
            />
            <RouterPage
                path="shapes/box"
                pageComponent={<BasicPage child={<Box />} />}
            />
            <RouterPage
                path="shapes/plane"
                pageComponent={<BasicPage child={<Plane />} />}
            />
            <RouterPage
                path="shapes/ground"
                pageComponent={<BasicPage child={<Ground />} />}
            />
            <RouterPage
                default
                pageComponent={<BasicPage child={<NotFound />} />}
            />
        </Router>
    )
}
