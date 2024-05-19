export const Products = (props: any) => {
  return (
    <>
      <a href={props.link} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={props.imageurl}
            className="aspect-square h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{props.title}</h3>
        <p className="mt-1 text-sm font-small text-gray-400">{props.date}</p>
        <p className="mt-1 text-lg font-medium text-gray-900">{props.price}</p>
      </a>
    </>
  );
};
