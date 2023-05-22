import { For, Show } from "solid-js";

import '../styles/Navbar.css';

export type LinkData = {
    title: string,
    url: string
}

type NavbarProps = {
    title: string,
    logo?: string,
    links: LinkData[]
}

export default (props: NavbarProps) => (
    <nav>
        <a href="/" class="home">
            <Show when={props.logo != null}>
                <img src={props.logo} alt="Logo" />
            </Show>
            <span>{props.title}</span>
        </a>
        <div class="links">
            <For each={props.links}>{ link =>
                <a href={link.url}>{link.title}</a>
            }</For>
        </div>
    </nav>
);
