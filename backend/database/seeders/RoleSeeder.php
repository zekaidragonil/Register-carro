<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\User;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'index_crear']);
        Permission::create(['name' => 'index_ver']);

        //lista de roles
        $admin = Role::create(['name'=> 'admin']);
        $usuario = Role::create(['name'=> 'user']);

        // agregar permisos
        $admin->givePermissionTo([
         'index_crear'
        ]);
        $usuario->givePermissionTo([
         'index_ver'
        ]);
        // asignar usuario
        $root = User::create([
            'name' => 'administrador',
            'email' => 'admin@gmail.com',
            'telefono' => '04143598555',
            'placa' => 'XPOSJFGK',
            'activado' => true,
            'password' => bcrypt('123456')
           ]);
             $root->assignRole('admin');

           $user = User::create([
            'name' => 'usuario',
            'email' => 'user@gmail.com',
            'telefono' => '04143598555',
            'placa' => 'EEDR554',
            'activado' => true,
            'password' => bcrypt('123456')
           ]);
           $user->assignRole('user');

    }
}
