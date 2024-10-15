import React from "react";

function EnlaceIcono({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-link"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 15l6 -6"></path>
      <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
      <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
    </svg>
  );
}

export default function Curso({
  alt,
  src,
  titulo,
  fechaExpedicion,
  href,
}: CursoD) {
  return (
    <a
      className="rounded-lg md:p-5 md:space-x-2 group px-2 py-4 pb-6 flex flex-col items-center overflow-hidden bg-[hsl(var(--background))] no-underline cursor-pointer text-center relative"
      target={href !== "#" ? "_blank" : ""}
      href={href}
      title={titulo}
    >
      {/* <div className="absolute top-2 left-3 md:hidden md:group-hover:block">
        <EnlaceIcono />
      </div> */}

      <div className="absolute top-2 left-3 md:hidden md:group-hover:block">
        <EnlaceIcono size={24} />
      </div>

      <figure className="w-20 flex items-center justify-center !m-0">
        <img src={src} alt={alt} loading="lazy" className="object-cover m-0" />
      </figure>

      <p className="text-[hsl(var(--color-titulos))] text-center mt-2 mb-0 mx-0 p-0 text-sm font-bold group-hover:underline:">
        {titulo}
      </p>
      {fechaExpedicion ? (
        <p className="text-xs">
          {fechaExpedicion.toLocaleString(undefined, {
            month: "long",
            year: "numeric",
          })}
        </p>
      ) : null}
    </a>
  );
}
