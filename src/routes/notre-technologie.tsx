import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/notre-technologie")({beforeLoad:()=>{throw redirect({to:"/technologie",statusCode:301});}});
