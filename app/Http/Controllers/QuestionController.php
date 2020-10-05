<?php

namespace App\Http\Controllers;

use App\Model\Question;
use Illuminate\Http\Request;
use App\Http\Resources\QuestionResource;

class QuestionController extends Controller
{
    public function index(){
        $questions = Question::all();
        return QuestionResource::collection($questions);
    }

    public function store(Request $request){
        $question = Question::create($request->all());
        return new QuestionResource($question);
    }

    public function show(Question $question){
        return new QuestionResource($question);
    }

    public function update(Request $request, Question $question){
        $question->update($request->all());
        return new QuestionResource($question);
    }

    public function destroy(Question $question){
        $question->delete();
        return response()->json([], 204);
    }
}
