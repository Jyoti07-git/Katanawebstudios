import Link from "next/link";
import { work } from "@/lib/site";

type WorkItem = (typeof work)[number];

export function WorkCard({ item, index = 0 }: { item: WorkItem; index?: number }) {
  return (
    <article className={`work-card work-card--${item.type}`}>
      <div className="work-card__visual">
        <span className="work-card__number">0{index + 1}</span>
        <div className="work-card__mockup"><span>{item.client}</span><i /></div>
      </div>
      <div className="work-card__copy">
        <p className="eyebrow">{item.category}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <Link href={`/work#${item.slug}`} className="text-link">View project <span>↗</span></Link>
      </div>
    </article>
  );
}
