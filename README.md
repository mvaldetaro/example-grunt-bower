![image](doc/gruntbower.png)

Example project for testing bower with grunt.
-----------------------------------------

```component.json``` of this project

```
{
  "name": "example-grunt-bower",
  "version": "0.1.0",
  "dependencies": {
    "jquery": "#1.9.1",
    "underscore": "#1.4.4",
    "example-bower-package": "https://github.com/netzzwerg/example-bower-package.git"
  }
}
```


```component.json``` of example-bower-package

```
{
  "name": "example-bower-package",
  "version": "0.2.1",
  "dependencies": {
    "jquery": "#1.8.1",
    "underscore": "#1.2.1"
  },
  "main" : "foo/"
}
```

Twitter Bower has no system wide dependencies, 
no dependencies are shared between different apps, and the dependency tree is flat.

So we have here jquery and underscore twice as dependency with different versions.
Bower takes in this situation the best version for both.

![image](doc/bower001.png)

