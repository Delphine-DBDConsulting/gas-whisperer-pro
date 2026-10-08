import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/offres/emissions-performance")({beforeLoad:()=>{throw redirect({to:"/emissions-performance",statusCode:301});}});
