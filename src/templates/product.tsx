import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Product({ pageContext }) {

    console.log(pageContext);

    const {itemDetails}=pageContext;

    return (
        <div>
            <div>Hello {itemDetails.title}</div>
            <h1>Description</h1>
    <p>{documentToReactComponents(itemDetails.desc.json)}</p>
        </div>
    )
}