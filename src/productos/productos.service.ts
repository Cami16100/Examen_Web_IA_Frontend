import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
  // Arreglo en memoria (obligatorio por el examen)
  private productos: any[] = []; 

  findAll() { return this.productos; }

  findOne(id: number) { 
    return this.productos.find(p => p.id === id); 
  }

  create(producto: any) {
    this.productos.push(producto);
    return producto;
  }

  update(id: number, data: any) {
    const index = this.productos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.productos[index] = { ...this.productos[index], ...data };
      return this.productos[index];
    }
  }

  remove(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
    return { mensaje: 'Eliminado' };
  }
}