import type { SitemapItem } from "@astrojs/sitemap";
import { readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

export const changefreq = {
  always: "always",
  hourly: "hourly",
  daily: "daily",
  weekly: "weekly",
  monthly: "monthly",
  yearly: "yearly",
  never: "never",
};

const pathProjects: string = "src/content/projects";
const regexProjects: RegExp = /proyecto/;
const priorityProjects: number = 0.7;

export async function SerializePage(item: SitemapItem) {
  if (regexProjects.test(item.url)) {
    item.priority = priorityProjects;

    const slug = item.url.split("/").at(-2);
    if (!slug) {
      return item;
    }

    const lastmod = getLastMod(slug, pathProjects);
    item.lastmod = lastmod?.toLocaleDateString("en-CA", { timeZone: "UTC" });
  }

  if (/plantillas/.test(item.url)) {
    item.priority = 0.5;
  }

  return item;
}

/**
 * Obtiene la fecha de la última modificación o publicación de un archivo `.mdx`
 * a partir de los metadatos (frontmatter).
 *
 * Busca en el frontmatter del archivo la propiedad `lastmod` y, si no existe,
 * devuelve la propiedad `publishDate`.
 * En caso de error (por ejemplo, si el archivo no existe o no contiene metadatos), retorna `null`.
 *
 * @param {string} slug - El nombre base del archivo `.mdx` (sin la extensión).
 * @param {string} contentDir - La ruta del directorio donde se encuentra el archivo.
 * @returns {Date | null} - La fecha de última modificación o publicación del archivo, o `null` si no se puede obtener.
 */
function getLastMod(slug: string, contentDir: string): Date | null {
  try {
    const filePath = join(contentDir, `${slug}.mdx`);
    const fileContent = readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return data.lastmod || data.publishDate;
  } catch (error) {
    console.log("Error a obtener los datos", error);

    return null;
  }
}
