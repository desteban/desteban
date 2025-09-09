import { useState } from "preact/hooks";
import Curso from "./Curso";
import { cursos } from "@constants/cursos";
import type { TargetedEvent } from "preact/compat";

export default function Cursos() {
  const [cursoBuscar, setCursoBuscar] = useState<string>("");

  let listaCursos = cursos.filter(
    (curso) =>
      curso.titulo.toUpperCase().includes(cursoBuscar.trim().toUpperCase()) ||
      curso.etiquetas.some((etiqueta) =>
        etiqueta.toUpperCase().includes(cursoBuscar.trim().toUpperCase())
      )
  );

  const changeCurso = (e: TargetedEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setCursoBuscar(value);
  };

  const sendForm = (e: TargetedEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={sendForm}>
        <label className="flex flex-col font-semibold">
          Buscar Cursos
          <input
            className="rounded-lg px-2 py-1 bg-[hsl(var(--background))] text-white"
            type="text"
            id="cursoBuscar"
            name="cursoBuscar"
            value={cursoBuscar}
            onInput={changeCurso}
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
