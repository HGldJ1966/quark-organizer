const getHtml = ({ id, link, title, date, epoch }, content) => `
<!DOCTYPE HTML>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <link rel="stylesheet" type="text/css" href="answer.css">
        <title>${title}</title>
    </head>
    <body>
      <div class="quark_answer answer_${id}">
        <header>
          <a class="quark_home_nav" href="../index.html">[home]</a>
          <h1 class="quark_title">${title}</h1>
          <div class="quark_meta">
            <div class="quark_id">${id}</div>
            <div class="quark_epoch">${epoch}</div>
            <span class="quark_display_date">${date}</span>
            <span class="quark_link">
              <a href="${link}">[read on quora]</a>
            </span>
          </div>
        </header>
      <main class="quark_content">${content}</main>
      <footer>
        <a class="quark_home_nav" href="../index.html">[home]</a>
      </footer>
    </div>
    <script src="answer-script.js"></script>
    <script>quarkPostProcess()</script>
  </body>
</html>`;

module.exports = {
  getHtml
}