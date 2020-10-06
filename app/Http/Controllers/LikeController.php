<?php

namespace App\Http\Controllers;

use App\Model\Like;
use Illuminate\Http\Request;
use App\Model\Reply;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwtapi');
    }

    public function like(Reply $reply){
        $like = $reply->like()->create([
            'user_id' => 2
        ]);
        return response()->json([
            'status' => true
        ], 200);
    }

    public function unlike(Reply $reply){
        $reply = $reply->like()->where('user_id',2)->delete();

        return response()->json([
            'status' => $reply
        ], 200);
    }
}

