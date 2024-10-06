body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-color: #121212;
    color: #f0f0f0;
    text-align: center;
}

header {
    padding: 20px;
    background-color: #1a1a1a;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
}

h1 {
    font-size: 3rem;
    color: #00bcd4;
    margin: 0;
    text-shadow: 0 0 10px #00bcd4;
}

section {
    margin: 40px 0;
}

h2 {
    font-size: 2.5rem;
    color: #ff5722;
    margin-bottom: 20px;
    text-shadow: 0 0 10px #ff5722;
}

.project-card {
    background-color: #2c2c2c;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
    display: inline-block;
    width: 300px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.9);
}

.future {
    background-color: #3a3a3a;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 15px #ff007f, 0 0 30px #ff007f;
    }
    100% {
        box-shadow: 0 0 30px #ff007f, 0 0 60px #ff007f;
    }
}

p {
    margin: 5px 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }
    h2 {
        font-size: 2rem;
    }
    .project-card {
        width: 250px;
    }
}
