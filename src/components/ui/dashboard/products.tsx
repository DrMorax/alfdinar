import DeleteProduct from "./delete-button";
import EditProduct from "./edit-button";

export const Products = (props: any) => {
  return (
    <div className="shrink-0 first:pl-2 last:pr-2 p-4">
      <a href={props.link}>
        <div>
          <img
            alt={`Image of ${props.title}`}
            src={props.imageurl}
            className="shrink-0 aspect-square h-[300px] w-[300px] object-cover object-center hover:opacity-75 rounded-lg shadow-xl bg-white"
          />
          <h3 className="mt-4 text-md text-gray-700">{props.title}</h3>
        </div>
      </a>
      {/* <p className="mt-1 text-sm font-small text-gray-400">{props.date}</p> */}
      {props.admin ? (
        <div className="flex flex-row-reverse space-x-1 space-x-reverse">
          <DeleteProduct id={props.id} />
          <EditProduct id={props.id} />
        </div>
      ) : null}
    </div>
  );
};
