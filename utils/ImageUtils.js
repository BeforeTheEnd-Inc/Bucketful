export const importPicture = function handleImport(event) {
    let file = event.target.files[0];

    if (file === undefined) {
        return;
    }

    let fileReader = new FileReader();
    let id = '#' + event.target.imageId;

    fileReader.onload = function (e) {
        // event.target.imgSrc = e.target.result;
        $(id).attr("src", e.target.result);
    };

    fileReader.readAsDataURL(file);
};

export const inputSelection =  function handleInput(event) {
    let id = '#' + event.target.inputId;
    let input = document.querySelector(id);
    $(input).click();
};