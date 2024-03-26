import AboutMe from "./AboutMe"
import MinhaJornada from "./MinhaJornada"
import MinhaBase from "./MinhaBase"
import Image from "./Image"

function Background(){
    return(
        <div className="background">
            <div classname="left"> 
                <AboutMe />
                <MinhaJornada />
                <MinhaBase />
            </div>
            <div className="right">
                <Image />
            </div>
        </div>
    )
}

export default Background