<?php

namespace App\Http\Controllers;

use App\Model\Reply;
use Illuminate\Http\Request;
use App\Http\Resources\ReplyResource;
use App\Model\Question;

class ReplyController extends Controller
{
    public function index(Question $question)
    {
        $replies = $question->reply;
        return ReplyResource::collection($replies);
    }

    public function store(Request $request, Question $question)
    {
        // $reply = Reply::create([
        //     'body' => $request->body,
        //     'question_id' => $question->id,
        //     'user_id' => $request->user_id
        // ]);
        $reply = $question->reply()->create($request->all());
        return new ReplyResource($reply);
    }

    public function show(Question $question, Reply $reply)
    {
        return new ReplyResource($reply);
    }

    public function update(Request $request, Question $question, Reply $reply)
    {
        $reply->update($request->all());
        return new ReplyResource($reply);
    }

    public function destroy(Question $question, Reply $reply)
    {
        $reply->delete();
        return response()->json([], 200);
    }
}
