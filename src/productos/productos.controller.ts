import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get() // Listar registros
  listar() { return this.productosService.findAll(); }

  @Get(':id') // Obtener por id
  obtenerUno(@Param('id') id: string) { return this.productosService.findOne(+id); }

  @Post() // Crear registro
  crear(@Body() producto: any) { return this.productosService.create(producto); }

  @Put(':id') // Actualizar registro
  actualizar(@Param('id') id: string, @Body() producto: any) {
    return this.productosService.update(+id, producto);
  }

  @Delete(':id') // Eliminar registro
  eliminar(@Param('id') id: string) { return this.productosService.remove(+id); }
}