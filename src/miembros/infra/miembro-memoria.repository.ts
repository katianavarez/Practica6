import { Injectable } from "@nestjs/common";
import { MiembroRepository } from "../dominio/miembro.repository.js";
import { Miembro } from "../dominio/entidades.js";
import { CrearMiembroDto } from "../dto/crear-miembro.dto.js";
import { ActualizarMiembroDto } from "../dto/actualizar-miembro.dto.js";

@Injectable()
export class MiembroMemoriaRepository implements MiembroRepository {
    private miembros: Miembro[] = [
        {id: 1, nombre: 'Juan', correo: "juan@gmail.com", membresia: "premium", activo: true},
        {id: 2, nombre: 'Pedro', correo: "pedro@gmail.com", membresia: "basica", activo: false},
        {id: 3, nombre: 'Julio', correo: "julio@gmail.com", membresia: "premium", activo: true}
    ];
    
    private siguienteId = 4;

    async listar(): Promise<Miembro[]> {
        return this.miembros;
    }

    async buscarPorId(id: number): Promise<Miembro | null> {
        return this.miembros.find(m => m.id === id) ?? null;
    }

    async crear(datos: CrearMiembroDto): Promise<Miembro> {
        const nuevo: Miembro = { id: this.siguienteId++, nombre: datos.nombre, correo: datos.correo,
            membresia: datos.membresia, activo: true
        };
        this.miembros.push(nuevo);
        return nuevo;
    }

    async actualizar(id: number, datos: ActualizarMiembroDto): Promise<Miembro | null> {
        const miembro = this.miembros.find(c => c.id === id);
        if (!miembro) return null;
        if (datos.nombre !== undefined) miembro.nombre = datos.nombre;
        if (datos.correo !== undefined) miembro.correo = datos.correo;
        if (datos.membresia !== undefined) miembro.membresia = datos.membresia;
        if (datos.activo !== undefined) miembro.activo = datos.activo;
        return miembro;
    }

    async eliminar(id: number): Promise<Miembro | null> {
        const indice = this.miembros.findIndex(c => c.id === id)
        if (indice === -1) return null;
        const [eliminado] = this.miembros.splice(indice, 1);
        return eliminado;
    }
    
}