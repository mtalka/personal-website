import React from "react";
import { Card } from "react-bootstrap";

function PageTitle(props: any) {

    return (
        <Card>
              <Card.Body>
                <div className="title-text">
                  <span className="title-hashtag"># </span>
                  <span className="title-actual">Markus Talka </span>
                  <span className="title-comment">// software developer</span>
                </div>
              </Card.Body>
            </Card>
    )
}

export default PageTitle;