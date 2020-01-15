let dontRefresh;

const testDragAndDrop = () => {
    try {
        dontRefresh.forEach(element => element.destroy());
    } catch (error) { 
        alert('It Broke. :(')
    }

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
        return positions[keyName] = position;
    })

    updateBoxes();

    dontRefresh = ['.red circle', '.blue circle'].map(circle =>{
        const thisCircle = document.querySelector(circle)

    })

}

