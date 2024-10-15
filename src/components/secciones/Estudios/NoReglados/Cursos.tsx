import React, { useState } from "react";
import Curso from "./Curso";

const cursos: Array<CursoD> = [
  {
    alt: "Logo Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Introducción a PHP",
    href: "https://platzi.com/@desteban/curso/1338-course/diploma/detalle/",
    fechaExpedicion: new Date(2019, 1),
  },
  {
    alt: "Logo Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso Básico de Programación Orientada a Objetos con JavaScript",
    href: "https://platzi.com/p/desteban/curso/2332-javascript-poo/diploma/detalle/",
    fechaExpedicion: new Date(2022, 1),
  },
  {
    alt: "Logo Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Next.js",
    href: "https://platzi.com/p/desteban/curso/1991-next/diploma/detalle/",
    fechaExpedicion: new Date(2023, 2),
  },
  {
    alt: "Logo Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Backend con NestJS",
    href: "https://platzi.com/p/desteban/curso/2272-nestjs/diploma/detalle/",
    fechaExpedicion: new Date(2023, 9),
  },
  {
    alt: "Logo Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de API REST con Laravel",
    href: "https://platzi.com/p/desteban/curso/2185-laravel-api/diploma/detalle/",
    fechaExpedicion: new Date(2024, 0),
  },
  {
    alt: "Logo Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso Profesional de Git y GitHub",
    href: "https://platzi.com/p/desteban/curso/1557-git-github/diploma/detalle/",
    fechaExpedicion: new Date(2024, 0),
  },
  {
    alt: "Logo Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Programación Orientada a Objetos con C#",
    href: "https://platzi.com/p/desteban/curso/8036-course/diploma/detalle/",
    fechaExpedicion: new Date(2024, 3),
  },
  {
    alt: "Logo Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Principios SOLID en C# y .NET",
    href: "https://platzi.com/p/desteban/curso/4761-solid-csharp-net/diploma/detalle/",
    fechaExpedicion: new Date(2024, 3),
  },
  {
    alt: "Logo Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Buenas Prácticas y Código Limpio en C#",
    href: "https://platzi.com/p/desteban/curso/4788-clean-code-csharp/diploma/detalle/",
    fechaExpedicion: new Date(2024, 3),
  },
  {
    alt: "Logo Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Manejo de Datos en C# con LINQ",
    href: "https://platzi.com/p/desteban/curso/4263-linq/diploma/detalle/",
    fechaExpedicion: new Date(2024, 4),
  },
  {
    alt: "Logo Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Frontend Developer",
    href: "https://platzi.com/p/desteban/curso/2467-frontend-developer/diploma/detalle/",
    fechaExpedicion: new Date(2024, 7),
  },
];

export default function Cursos() {
  const [cursoBuscar, setCursoBuscar] = useState<string>("");

  let listaCursos = cursos.filter((curso) =>
    curso.titulo.toUpperCase().includes(cursoBuscar.toUpperCase())
  );

  return (
    <div>
      <form>
        <label className="flex flex-col">
          Buscar Cursos
          <input
            className="rounded-lg px-2 py-1"
            type="text"
            id="cursoBuscar"
            name="cursoBuscar"
            value={cursoBuscar}
            onChange={(e) => setCursoBuscar(e.currentTarget.value)}
            autoComplete="off"
          />
        </label>
      </form>

      <div className="min-h-64 grid gap-3 grid-cols-2 md:grid-cols-4 mt-3">
        {listaCursos.map((curso, index) => (
          <Curso key={index + curso.titulo} {...curso} />
        ))}
      </div>
    </div>
  );
}
