<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\ChangePasswordRequest;

use Illuminate\Support\Facades\DB;

use Illuminate\Http\Response;

use App\User;

class ChangePasswordController extends Controller
{
    public function process(ChangePasswordRequest $request){
        return $this->getPasswordResetTableRow($request)->count() > 0 ? $this->changPassword($request) : 
        $this->tokenNotfoundResponse() ;
    }

    private function getPasswordResetTableRow($request){
        return DB::table('password_resets')->where(['email'=>$request->email,'token'=>$request->resetToken]);
    }

    private function tokenNotfoundResponse(){
        return response()->json(['error'=>'Token or Email is incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function changPassword($request){
        $user = User::whereEmail($request->email)->first();
        $user->update(['password'=>$request->password]);
        $this->getPasswordResetTableRow($request)->delete();
        return response()->json(['data'=>'Password Successfully Changed'],Response::HTTP_CREATED);
    }
}
