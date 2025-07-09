import "./style.css";
import App from "./_App.html?raw";
import { app } from "./_App.ts";

document.querySelector<HTMLDivElement>("#root")!.innerHTML = App;

app();
