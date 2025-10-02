import { useState } from "preact/hooks";
import Curso from "./Curso";
import { cursos } from "@constants/cursos";
import type { JSX } from "react";
import type { InputEventHandler, SubmitEventHandler } from "preact";

export default function Cursos(): JSX.Element {
  const [cursoBuscar, setCursoBuscar] = useState<string>("");

  let listaCursos = cursos.filter(
    (curso) =>
      curso.titulo.toUpperCase().includes(cursoBuscar.trim().toUpperCase()) ||
      curso.etiquetas.some((etiqueta) =>
        etiqueta.toUpperCase().includes(cursoBuscar.trim().toUpperCase())
      )
  );

  const changeCurso: InputEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setCursoBuscar(value);
  };

  const sendForm: SubmitEventHandler<HTMLFormElement> = (e) => {
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
            placeholder="Buscar por título o tecnología..."
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
