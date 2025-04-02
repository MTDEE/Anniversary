function openEnvelope() {
    let envelope = document.getElementById("envelope");
    let letter = document.getElementById("letter");

    // เปิดซองจดหมาย
    envelope.classList.add("open");

    // ให้แน่ใจว่าจดหมายอยู่ข้างหน้าซองจดหมาย
    letter.style.zIndex = "3";

    // แสดงจดหมายขึ้นมา
    setTimeout(() => {
        letter.style.display = "block";
    }, 300);
}


function showVideo() {
    // ซ่อนจดหมายและซองจดหมาย
    document.getElementById("content").style.display = "none";

    // แสดงวิดีโอ
    document.getElementById("videoContainer").style.display = "block";
}
