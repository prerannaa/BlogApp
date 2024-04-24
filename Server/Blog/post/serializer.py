from rest_framework.serializers import ModelSerializer
from rest_framework import serializers;
from post.models import Post



class PostsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
