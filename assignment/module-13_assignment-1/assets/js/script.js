window.addEventListener("load", () => {
    document.getElementById("preloader").style='display:none;opacity:0;visibility:hidden;transition:.5s;';
});

if(localStorage.getItem('mode') == 'dark'){
    document.getElementsByTagName('html')[0].setAttribute("data-bs-theme", 'dark');
    document.getElementById('modeChanger').innerText = 'Light Mode'
}
document.getElementById('modeChanger').addEventListener("click", (e)=>{
    let themeMode = document.getElementsByTagName('html')[0].getAttribute("data-bs-theme")
    if(themeMode == 'dark'){
        document.getElementsByTagName('html')[0].setAttribute("data-bs-theme", 'light')
        e.target.innerText = 'Dark Mode';
        localStorage.setItem('mode', 'light')
    }else{
        document.getElementsByTagName('html')[0].setAttribute("data-bs-theme", 'dark')
        e.target.innerText = 'Light Mode';
        localStorage.setItem('mode', 'dark')
    }
})


const ctx = document.getElementById("reactVsVue");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["React", "Vue"],
        datasets: [
            {
                label: "Download",
                data: [82882457, 388967690],
                backgroundColor:'orange',
                borderColor:'black',
                borderWidth: 1,
            },
            {
                label: "Performance",
                data: [8, 10],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
                borderWidth: 1,
            },
            {
                label: "Eco-system",
                data: [10, 8],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
