/* eslint-disable no-unused-expressions */
const copyToClipBoard = (
  string: string,
  callback?: (err?: unknown) => void
) => {
  let textarea;

  try {
    textarea = document.createElement('textarea');
    textarea.setAttribute('readonly', 'true');
    textarea.setAttribute('contenteditable', 'true');
    textarea.style.position = 'fixed';
    textarea.value = string;

    document.body.appendChild(textarea);
    textarea.select();

    const range = document.createRange();
    range.selectNodeContents(textarea);

    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);

    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand('copy');
  } catch (err) {
    console.error(err);
    callback && callback(err);
  } finally {
    if (textarea) {
      document.body.removeChild(textarea);
    }

    callback && callback();
  }
};

export default copyToClipBoard;
