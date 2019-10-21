import React from "react";

const Quote = ({ profile }) => (
    <figure>
        <img src={profile.image} alt={profile.character} />
        <figcaption>
            <blockquote>{profile.quote}</blockquote>
            <cite>{profile.character}</cite>
        </figcaption>
    </figure>
);

export default Quote;