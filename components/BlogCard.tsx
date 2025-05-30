import { Link, useLocation } from "react-router";
import {
  ChipDirective,
  ChipListComponent,
  ChipsDirective,
} from "@syncfusion/ej2-react-buttons";
import { cn } from "lib/utils";

const BlogCard = ({
  id,
  name,
  imageUrl,
  tags,
  time,
  content,
}: BlogCardProps) => {
  const path = useLocation();

  return (
    <Link
      to={
        path.pathname === "/" || path.pathname.startsWith("/travel")
          ? `/travel/${id}`
          : `/blog/${id}`
      }
      className="trip-card"
    >
      <img src={imageUrl} alt={name} />

      <article>
        <h2 className="truncate">{name}</h2>
        <p className="line-clamp-2">{content}</p>
      </article>

      <div className="mt-5 pl-[18px] pr-3.5 pb-5">
        <ChipListComponent id="travel-chip">
          <ChipsDirective>
            {tags.map((tag, index) => (
              <ChipDirective
                key={index}
                text={tag}
                cssClass={cn(
                  tag === "Tản Lạc Trôi" || tag === "Trong Trang Sách"
                    ? "!bg-pink-50 !text-pink-500"
                    : "!bg-success-50 !text-success-700"
                )}
              />
            ))}
          </ChipsDirective>
        </ChipListComponent>
      </div>

      <article className="tripCard-pill">{time}</article>
    </Link>
  );
};

export default BlogCard;
