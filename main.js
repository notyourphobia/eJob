let stuffIdontKnowWhatItDoes;

const testDragAndDrop = () => {
    try {
        stuffIdontKnowWhatItDoes.forEach(element => element.destroy());
    } catch (error) { }

    const circleSize = 40;
    const positions = {};
    const progress = {};

    ['.red-box', '.blue-box'].map(box => {

        const theBox = document.querySelector(box);

        const position = {
            top: theBox.offsetTop,
            left: theBox.offsetLeft,

            botton: theBox.offsetHeight - circleSize,
            right: theBox.offsetWidth - circleSize
        }

        const keyName = box.replace(/\./, '').replace(/-/, ' ');
        progress[keyName] = 0;
        return positions[keyName] = position
    })
}

