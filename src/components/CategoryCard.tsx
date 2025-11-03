import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  description?: string;
}

const CategoryCard = ({ title, image, link, description }: CategoryCardProps) => {
  return (
    <Link to={link} className="group block">
      <div className="relative overflow-hidden rounded-lg aspect-square bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <div>
            <h3 className="text-white text-2xl font-bold mb-1">{title}</h3>
            {description && <p className="text-white/90 text-sm">{description}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
