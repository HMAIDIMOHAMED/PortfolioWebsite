import { Tags } from "./tags";

export class Project {
    id !: number;
    name !: string;
    summary !: string;
    description !: string;
    projectLink !: string;
    pictures !: string [];
    tags !: Tags []
}
