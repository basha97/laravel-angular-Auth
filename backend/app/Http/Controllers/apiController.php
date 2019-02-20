<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

use App\Task;

class apiController extends Controller
{
    public function addTask(Request $request){
        $input = $request->all();
        $data = Task::create($input);
        return response()->json(['success'=>true,'data'=>$data]);
    }
}
