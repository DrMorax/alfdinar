import { Button } from "../button";
import DeleteProduct from "./delete-button";
import EditProduct from "./edit-button";

export const Products = (props: any) => {
  return (
    <div>
      <a href={props.link} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            alt={`Image of ${props.title}`}
            src={props.imageurl}
            className="aspect-square h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
      </a>
      <h3 className="mt-4 text-sm text-gray-700">{props.title}</h3>
      <p className="mt-1 text-sm font-small text-gray-400">{props.date}</p>
      {props.admin ? (
        <div className="flex flex-row-reverse space-x-1 space-x-reverse">
          <DeleteProduct id={props.id} />
          <EditProduct id={props.id} />
        </div>
      ) : null}
    </div>
  );
};
