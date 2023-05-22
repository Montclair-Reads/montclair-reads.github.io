import '../styles/Link.css'

type LinkProps = {
    url: string,
    newtab?: boolean,
    children: any
}

export default (props: LinkProps) => (
    <a href={props.url} target={props.newtab ? '_blank' : '_self'} class="Link">{props.children}</a>
);