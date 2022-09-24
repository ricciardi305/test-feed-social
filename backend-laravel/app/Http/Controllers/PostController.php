<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function getAllPosts()
    {
        $posts = Post::get()->toJson(JSON_PRETTY_PRINT);
        return response($posts, 200);
    }

    public function createPost(Request $request)
    {

        $post = new Post();
        $post->name = $request->name;
        $post->postType = $request->postType;
        $post->postContent = $request->postContent;

        if ($request->hasFile('postImage') && $request->file('postImage')->isValid()) {
            $requestImage = $request->postImage;
            if($requestImage->getMimetype() === 'image/jpeg' || $requestImage->getMimetype() === 'image/png') {
                $extension = $requestImage->extension();
                $imageName = md5($requestImage->getClientOriginalName() . strtotime("now")) . "." . $extension;
                $request->postImage->move(storage_path('app/public/images'), $imageName);
                $post->postImage = $imageName;
                $post->save();

                return response()->json($post, 201);
            } else {
                return response()->json([
                    'message' => 'Image extension not supported'
                ], 400);
            }
        }

    }

    public function getPost($id)
    {
        if (Post::where('id', $id)->exists()) {
            $post = Post::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($post, 200);
        } else {
            return response() -> json([
                'message' => 'Post not found'
            ], 404);
        }
    }

    public function updatePost($id, Request $request)
    {
        if (Post::where('id', $id)->exists()) {
            $post = Post::find($id);
            $post->name = is_null($request->name) ? $post->name : $request->name;
            $post->postType = is_null($request->postType) ? $post->postType : $request->postType;
            $post->postContent = is_null($request->postContent) ? $post->postContent : $request->postContent;
            $post->save();

            return response()->json([
                'message' => 'Post successfully updated'
            ], 200);
        } else {
            return response() -> json([
               'message' => 'Post not found'], 404);
        }
    }

    public function deletePost($id)
    {
        if (Post::where('id', $id)->exists()) {
            $post = Post::find($id);
            $post->delete();

            return response()->json([
               'message' => 'Post successfully deleted'], 202);
        } else {
            return response()->json([
                'message' => 'Post not found'
            ], 404);
        }
    }
}
