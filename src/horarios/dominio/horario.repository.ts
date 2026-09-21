import { ActualizarHorarioDto } from "../dto/actualizar-horario.dto.js";
import { CrearHorarioDto } from "../dto/crear-horario.dto.js";
import { Horario } from "./entidades.js";

export interface HorarioRepository {
    listar(): Promise<Horario[]>;
    buscarPorId(id: number): Promise<Horario | null>;
    crear(datos: CrearHorarioDto): Promise<Horario>;
    actualizar(id: number, datos: ActualizarHorarioDto): Promise<Horario | null>;
    eliminar(id: number): Promise<Horario | null>;
}