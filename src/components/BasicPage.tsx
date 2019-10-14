import "./BasicPage.css"

import React from "react"
import { Link } from "@reach/router"

export default function BasicPage(props: { child: React.ReactElement }) {
    return (
        <>
            <Link className="back-to-home" to="/">
                Home
            </Link>
            {props.child}
        </>
    )
}
