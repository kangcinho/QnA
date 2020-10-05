<?php

namespace App\Http\Controllers;

use App\Model\Reply;
use Illuminate\Http\Request;
use App\Http\Resources\ReplyResource;

class ReplyController extends Controller
{
    public function index()
    {
        // $replies = Reply::with('question')->get();
        // return ReplyResource::collection($replies);
    }

    public function store(Request $request)
    {
        $reply = Reply::create($request->all());
        return new ReplyResource($reply);
    }

    public function show(Reply $reply)
    {
        return new ReplyResource($reply);
    }

    public function update(Request $request, Reply $reply)
    {
        $reply->update($request->all());
        return new ReplyResource($reply);
    }

    public function destroy(Reply $reply)
    {
        $reply->delete();
        return response()->json([], 200);
    }
}
