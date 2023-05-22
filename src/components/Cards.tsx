import { For } from 'solid-js';

import { IssueCard, ArticleCard } from './Card';

import type { IssueCardData, ArticleCardData } from './Card';

import '../styles/Cards.css';

export const IssueCards = (props: { issues: IssueCardData[] }) => (
    <div class="Cards">
        <For each={props.issues}>{issue => (
            <IssueCard id={issue.id} datePublished={issue.datePublished} />
        )}</For>
    </div>
);

export const ArticleCards = (props: { articles: ArticleCardData[] }) => (
    <div class="Cards">
        <For each={props.articles}>{article => (
            <ArticleCard name={article.name} slug={article.slug} />
        )}</For>
    </div>
);