from django.shortcuts import render
from rest_framework import viewsets
from post.models import Post
from post.serializer import PostsSerializer
# Create your views here.


# def posts(request):
#     return render(request, 'posts.html')

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostsSerializer