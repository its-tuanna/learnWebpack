import { helloWorld } from "./exportFunc";
import "./styles/main.scss";
import earthSvgSrc from "./assets/earth-globe-svgrepo-com.svg";

console.log(helloWorld());

const earthImg = document.getElementById("earth-img");
earthImg.src = earthSvgSrc;
