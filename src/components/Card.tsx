import '../styles/Card.css';

export type IssueCardData = {
    id: string,
    datePublished: string
}

export type ArticleCardData = {
    name: string,
    slug: string
}

export const IssueCard = (props: IssueCardData) => {
    const imgURL = `https://assets.api.bookcreator.com/${props.id.replace('/', '/books/')}/cover/`;
    const linkURL = `/issue/#${props.id}`;

    return (
        <a href={linkURL} class="Card">
            <img src={imgURL} alt="Cover Image" />
            <span>{props.datePublished}</span>
        </a>
    );
}

const ArticleClick = (slug: string) => {
    const cards = document.querySelector('.Cards') as HTMLDivElement;
    cards.remove();

    const main = document.querySelector('main') as HTMLElement;
    const iframe = document.createElement('iframe');
    iframe.src = `/articles/${slug}/index.html`;
    main.appendChild(iframe);
}

export const ArticleCard = (props: ArticleCardData) => (
    <a href={`/articles/#${props.slug}`} class="Card" onClick={() => ArticleClick(props.slug)}>
        <img src={`/articles/${props.slug}/thumbnail.png`} alt="Cover Image" />
        <span>{props.name}</span>
    </a>
);
