/**
 * Objeto global con coincidencias entre el tipo de interfaz y los simbolos
 * se hace para evitar lidiar con la magia de los strings
 */
export const TYPES = {
    IDepA: Symbol.for("IDepA"),
    IDepB: Symbol.for("IDepB"),
    IDepC: Symbol.for("IDepC")
}