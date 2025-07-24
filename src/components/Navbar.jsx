import { useEffect, useState } from "react"

export default function Navbar() {
    const [lightMode, setLightMode] = useState(false);

    useEffect(()=>{
        const webBody = document.body;
        if(lightMode) {
            webBody.classList.add("light");
        } else {
            webBody.classList.remove("light");
        }
    },[lightMode]);
    
    const pageTheam = () => {
        setLightMode(!lightMode);
        console.log(lightMode)
    }
    return(
        <main className="bg-[#010409] w-full p-7 flex justify-around">
            <div id="logo" className="w-fit h-auto flex items-center gap-5">
                <img src="Assests/Icon.svg" alt="Logo" className="w-10" />
                <h1 className="text-xl font-bold">RepoRadar</h1>
            </div>
            <div id="btn-options" className="flex items-center gap-10">
                <button className="p-2 rounded-lg flex gap-2 items-center">
                    <i className="fa-solid fa-star text-xl"></i>
                    <span className="text-xl font-semibold"><a href="https://github.com/ig-ayush/RepoRadar">Star on Github</a></span>
                </button>
                <div className="toggle-switch">
                    <label className="switch-label">
                        <input type="checkbox" className="checkbox" onChange={pageTheam} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </main>
    )
}