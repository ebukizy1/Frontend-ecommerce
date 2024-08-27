import { ReactElement } from "react"
import { Placeholder } from "react-bootstrap"
import { Link } from "react-router-dom"
import { HOME } from "../../../../utils/pathConstants"

const Logo = (): ReactElement => {
    return (

        <Link to={HOME} className="float-start">
            <img src="https://i.postimg.cc/LXN6mmq4/Screenshot-from-2024-08-20-18-59-51.png" height="80" width="140"/>
        </Link>
    )
}

export default Logo