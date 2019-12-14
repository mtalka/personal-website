import React from "react";

const links: any[] = [
    {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/markustalka/"
    },
    {
        title: "Facebook",
        link: "https://www.facebook.com/markustalka"
    },
    {
        title: "Twitch",
        link: "https://www.twitch.tv/MTAx666"
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/mtalka/"
    },
    {
        title: "Twitter",
        link: "https://twitter.com/markustalka"
    },
    {
        title: "Github",
        link: "https://github.com/mtalka/"
    },
    {
        title: "E-mail",
        link: "mailto:markus.talka@gmail.com"
    }
]

function LinkList() {
    return (
        <div className="link-list">
            {links.map((l) =>
                <div key={l.title} className="link">
                    <span>[</span><a href={l.link}>{l.title}</a><span>]</span>
                </div>
            )
            }
        </div>
    )
}

export default LinkList;