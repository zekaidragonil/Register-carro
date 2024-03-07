<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Carros;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function index()
    {
        $user = User::all();
          return $user;
    }

    public function show($id)
    {

        $show = User::find($id);
        return $show;
    }

    public function update(Request $request ,$id)
    {

        $show = User::find($id);
        $show->fill($request->only(['name', 'cedula', 'dependencia', 'activado' ,'telefono']));
        $show->save();


        return response()->json(['message' => 'Usuario Activado']);

    }

    public function register(Request $request)

    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'placa' => 'required|string',
            'telefono' => 'required',
        ]);

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->telefono =  $request->telefono;

        $placa = $request->placa;

        $regir = User::where('placa', $placa)->first();
        if($regir){
            return response()->json(['error' => 'Placa ya  existe Agregue una nueva placa'], 401);
        }else{
        $carro = Carros::where('placa', $placa)->first();
        if($carro){
            $user->assignRole('user');
            $user->placa = $request->placa;
            $user->save();
        }else{
            return response()->json(['error' => 'Placa no existe'], 401);
        }

        }

        return response()->json(['message' => 'Usuarios agregado con existo']);



    }
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Credenciales negadas'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function getUser()
    {
        $user = auth()->user();
        $roleNames = $user->getRoleNames();

        return response()->json([
            'user' => $user,
            'roleNames' => $roleNames
        ]);
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

}
