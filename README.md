<h1>Phishing Playground</h1>

<h2>Purpose</h2> 
<p>Just for education.</p>

<h2>Code but in nutshell</h2>

```javascript
import express from "express";

 // Need to reverse proxy on Nginx
app.get("/", (req, res) => {
    let ip = req.headers["x-forwarded-for"];
    console.log(ip)
    // ...Other statement
    res.redirect("https://www.google.com");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
```

<h2>How it work?</h2>
<ul>
    <li>This app is using Nginx to reverse proxy</li>
    <li>When a client is enter into the app the client's ip and location will be log at the console.</li>
    <li>Finally, the app is going to foward you to <a href="https://www.google.com">https://www.google.com</a></li>
</ul>