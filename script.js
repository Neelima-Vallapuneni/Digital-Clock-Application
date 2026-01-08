function setClock(){
    const now=new Date();
    const hours=now.getHours().toString().padStart(2,'0');
    const minutes=now.getMinutes().toString().padStart(2,'0');
    const seconds=now.getSeconds().toString().padStart(2,'0');

    const days=["Sunday","Monday","Tuesday","Wedensday","Thursday","Friday","Saturday"];
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const day=days[now.getDay()];
    const month=months[now.getMonth()];
    const date=now.getDate();
    const year=now.getFullYear();

    document.getElementById("time").textContent=`${hours}:${minutes}:${seconds}`;
    document.getElementById("date").textContent=`${day},${month},${date},${year}`;
}
setInterval(setClock,1000);
setClock();