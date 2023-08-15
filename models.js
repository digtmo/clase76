
import {INTEGER } from 'sequelize';
import {Sequelize, DataTypes} from 'sequelize';

const sequelize = new Sequelize('biblioteca', 'postgres','',{host:'localhost', password:'123momiaes', dialect:'postgres'});

export const prestamo = sequelize.define('prestamo', { 
    fecha_inicio: DataTypes.DATEONLY,
    fecha_espera_devolucion: DataTypes.DATEONLY,
    fecha_real_devolucion: DataTypes.DATEONLY });

    export const libro = sequelize.define('libro', { 
        ISBN:{
            type:INTEGER,
            primaryKey:true
        },
        titulo: DataTypes.STRING,
        numero_paginas: DataTypes.INTEGER});
    
    export const autor = sequelize.define('autor',{
        nombres: DataTypes.STRING,
        apellidos: DataTypes.STRING,
        fecha_nacimiento: DataTypes.DATEONLY,
        fecha_muerte: DataTypes.DATEONLY,
        apellidos: DataTypes.STRING,
    })

    export const socio = sequelize.define('autor',{
        nombres: DataTypes.STRING,
        apellidos: DataTypes.STRING,
        rut: DataTypes.STRING,
        direccion: DataTypes.STRING,
        telefono: DataTypes.INTEGERG,
    })


export async function definir(){
    await sequelize.sync({force:true});
}

