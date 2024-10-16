import React, { useState } from "react";
import Curso from "./Curso";
import { cursos } from "@constants/cursos";

export default function Cursos() {
  const [cursoBuscar, setCursoBuscar] = useState<string>("");

  let listaCursos = cursos.filter(
    (curso) =>
      curso.titulo.toUpperCase().includes(cursoBuscar.trim().toUpperCase()) ||
      curso.etiquetas.some((etiqueta) =>
        etiqueta.toUpperCase().includes(cursoBuscar.trim().toUpperCase())
      )
  );

  return (
    <div>
      <form>
        <label className="flex flex-col font-semibold">
          Buscar Cursos
          <input
            className="rounded-lg px-2 py-1 bg-[hsl(var(--background))] text-white"
            type="text"
            id="cursoBuscar"
            name="cursoBuscar"
            value={cursoBuscar}
            onChange={(e) => setCursoBuscar(e.currentTarget.value)}
            autoComplete="off"
          />
        </label>
      </form>

      <div className="min-h-72 grid gap-3 grid-cols-2 md:grid-cols-4 mt-3">
        {listaCursos.map((curso, index) => (
          <Curso key={index + curso.titulo} {...curso} />
        ))}
      </div>
    </div>
  );
}
