function botResponse(rawText) {
    $.get("/get", { msg: rawText }).done(function (data) {
        console.log(rawText);
        console.log(data);
        
        if (data.startsWith("[IMAGE_URL]")) {
            // Extract image URL
            const imageUrl = data.replace("[IMAGE_URL]", "").trim();
            appendImageMessage(BOT_NAME, BOT_IMG, "left", imageUrl);
        } else {
            appendMessage(BOT_NAME, BOT_IMG, "left", data);
        }
    });
}

function appendImageMessage(name, img, side, imageUrl) {
    const msgHTML = `
        <div class="msg ${side}-msg">
            <div class="msg-img" style="background-image: url(${img})"></div>

            <div class="msg-bubble">
                <div class="msg-info">
                    <div class="msg-info-name">${name}</div>
                    <div class="msg-info-time">${formatDate(new Date())}</div>
                </div>
                <div class="msg-text">
                    <img src="${imageUrl}" alt="Chatbot Image" style="max-width: 100%; border-radius: 8px;">
                </div>
            </div>
        </div>
    `;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
}
