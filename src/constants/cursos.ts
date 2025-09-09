export type CursoD = {
  src: string;
  alt: string;
  titulo: string;
  href?: string;
  fechaExpedicion?: Date;
  etiquetas: etiquetas[];
};

export enum etiquetas {
  "react" = "React.js",
  "js" = "JavaScript",
  "html" = "HTML",
  "css" = "CSS",
  "php" = "PHP",
  "next.js" = "Next.js",
  "laravel" = "Laravel",
  "csharp" = "C#",
  "nest" = "NestJS",
  "typescript" = "TypeScript",
  "git" = "Git",
  "solid" = "solid",
  "dotnet" = ".NET",
  "angular" = "Angular",
  "tailwind" = "Tailwind CSS",
}

export const cursos: CursoD[] = [
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo:
      "Curso de Angular Forms: Creación y Optimización de Formularios Web",
    href: "https://platzi.com/p/desteban/curso/2027-course/diploma/detalle/",
    fechaExpedicion: new Date(2025, 7),
    etiquetas: [
      etiquetas.angular,
      etiquetas.typescript,
      etiquetas.tailwind,
      etiquetas.css,
      etiquetas.git,
    ],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Angular 17: Creación de Aplicaciones Web",
    href: "https://platzi.com/p/desteban/curso/8352-angular/diploma/detalle/",
    fechaExpedicion: new Date(2025, 0),
    etiquetas: [
      etiquetas.angular,
      etiquetas.typescript,
      etiquetas.tailwind,
      etiquetas.git,
    ],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de React.js",
    href: "https://platzi.com/p/desteban/curso/7395-react/diploma/detalle/",
    fechaExpedicion: new Date(2024, 8),
    etiquetas: [etiquetas.react, etiquetas.js, etiquetas.tailwind],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Frontend Developer",
    href: "https://platzi.com/p/desteban/curso/2467-frontend-developer/diploma/detalle/",
    fechaExpedicion: new Date(2024, 7),
    etiquetas: [etiquetas.html, etiquetas.css],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Manejo de Datos en C# con LINQ",
    href: "https://platzi.com/p/desteban/curso/4263-linq/diploma/detalle/",
    fechaExpedicion: new Date(2024, 4),
    etiquetas: [etiquetas.csharp],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Buenas Prácticas y Código Limpio en C#",
    href: "https://platzi.com/p/desteban/curso/4788-clean-code-csharp/diploma/detalle/",
    fechaExpedicion: new Date(2024, 3),
    etiquetas: [etiquetas.csharp],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Principios SOLID en C# y .NET",
    href: "https://platzi.com/p/desteban/curso/4761-solid-csharp-net/diploma/detalle/",
    fechaExpedicion: new Date(2024, 3),
    etiquetas: [etiquetas.csharp, etiquetas.solid, etiquetas.dotnet],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Programación Orientada a Objetos con C#",
    href: "https://platzi.com/p/desteban/curso/8036-course/diploma/detalle/",
    fechaExpedicion: new Date(2024, 3),
    etiquetas: [etiquetas.csharp],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso Profesional de Git y GitHub",
    href: "https://platzi.com/p/desteban/curso/1557-git-github/diploma/detalle/",
    fechaExpedicion: new Date(2024, 0),
    etiquetas: [etiquetas.git],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de API REST con Laravel",
    href: "https://platzi.com/p/desteban/curso/2185-laravel-api/diploma/detalle/",
    fechaExpedicion: new Date(2024, 0),
    etiquetas: [etiquetas.php, etiquetas.laravel],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Backend con NestJS",
    href: "https://platzi.com/p/desteban/curso/2272-nestjs/diploma/detalle/",
    fechaExpedicion: new Date(2023, 9),
    etiquetas: [etiquetas.nest, etiquetas.typescript],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Next.js",
    href: "https://platzi.com/p/desteban/curso/1991-next/diploma/detalle/",
    fechaExpedicion: new Date(2023, 2),
    etiquetas: [etiquetas.js, etiquetas["next.js"], etiquetas.typescript],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso Básico de Programación Orientada a Objetos con JavaScript",
    href: "https://platzi.com/p/desteban/curso/2332-javascript-poo/diploma/detalle/",
    fechaExpedicion: new Date(2022, 1),
    etiquetas: [etiquetas.js],
  },
  {
    alt: "Logo de Platzi",
    src: "/img/Platzi.svg",
    titulo: "Curso de Introducción a PHP",
    href: "https://platzi.com/@desteban/curso/1338-course/diploma/detalle/",
    fechaExpedicion: new Date(2019, 1),
    etiquetas: [etiquetas.php],
  },
];
