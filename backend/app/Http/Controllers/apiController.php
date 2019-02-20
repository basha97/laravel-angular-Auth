<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

use App\Task;

class apiController extends Controller
{
    public function addTask(Request $request){
        $input = $request['task'];
        return $input;
        return response()->json($data[200]);
    }
}
