from django.shortcuts import render

# Create your views here.
def areacircle(request):
    context={}
    return render(request,'mathapp/areacircle.html',context)

def volumecylinder(request):
    context={}
    return render(request,'mathapp/volumecylinder.html',context)
