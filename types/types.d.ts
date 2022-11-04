/* Props for text, wrapper divs etc.  */
type GeneralProps = {
    children: ReactElement,
    style?: CSSProperties,
    className?: string
}
/* Social Links */
interface ISocialLink {
    name: string,
    url: string
    svg?: string,
}

type SocialLinksProps = {
    links: LinkFormat[] | [],
    style?: CSSProperties,
    isActive?: boolean,
    className?: string
}

/*Blog Format*/
interface IBlog {
    title: string;
    description: string;
    published_at: string;
    reading_time_minutes: number;
    tag_list: string[];
}