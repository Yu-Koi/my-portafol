import React, { Fragment } from "react";
import nerymar from "../img/nerymar.jpg";
import nerymarg from "../img/nerymarg.jpg";

const Home = () => {
    return ( 
        <Fragment>
            {/* <h2>Hi! I'm Nerymar Guarnizo</h2> */}

            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={nerymar} className="d-block w-100" alt="uno" width={80}/>
                    </div>
                    <div className="carousel-item">
                    <img src={nerymarg} className="d-block w-100" alt="dos" />
                    </div>
                </div>
            </div>

        </Fragment>
     );
}
 
export default Home;