import { For, JSX } from 'solid-js';
import '../styles/Dropdown.css';

interface DropdownProps {
    options: {
        title: string,
        onSelect?: () => any
    }[],
    onSelect?: (option: {
        title: string,
        onSelect?: () => any
    }) => any,
    class?: string,
    ref?: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined
}

export default (props: DropdownProps) => (
    <div class={props.class != null ? `dropdown ${props.class}` : "dropdown"} ref={props.ref}>
        <For each={props.options}>{(option) => (
            <span class="dropdown-item" onClick={option.onSelect}>{option.title}</span>
        )}</For>
    </div>
)