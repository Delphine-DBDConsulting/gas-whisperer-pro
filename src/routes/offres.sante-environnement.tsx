import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/offres/sante-environnement")({beforeLoad:()=>{throw redirect({to:"/sante-environnement",statusCode:301});}});
