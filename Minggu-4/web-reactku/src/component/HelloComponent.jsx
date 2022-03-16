// agar function arrow HelloComponent bisa berjalan di react
// maka tambahkan react
import React from "react";
import './HelloComponent.css'

const HelloComponent = () => {
    return <p className="text-p"> ini adalah arrow function yang ada di dalam folder</p>
}

//agar komponen bisa dipakai dimana saja
export default HelloComponent;