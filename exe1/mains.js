const fillBlue = document.querySelector('.fillBlue');
const emptiesBlue = document.querySelectorAll('.emptyBlue');


fillBlue.addEventListener('dragstart', dragStart);
fillBlue.addEventListener('dragend', dragEnd)


for (const emptyBlue of emptiesBlue) {
    emptyBlue.addEventListener('dragover', dragOverBlue);
    emptyBlue.addEventListener('dragenter', dragEnterBlue);
    emptyBlue.addEventListener('dragleave', dragLeaveBlue);
    emptyBlue.addEventListener('drop', dragDropBlue);
}

function dragStartBlue() {
    console.log(this.className.split(' '));

    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEndBlue() {
    this.className = 'fillBlue';
}

function dragOverBlue(item) {
    item.preventDefault();
}

function dragEnterBlue(item) {
    item.preventDefault();
    this.className += ' hoverBlue';
}

function dragLeaveBlue() {
    this.className = 'emptyBlue';
}

function dragDropBlue() {
    this.className = 'emptyBlue';
    this.append(fillBlue)
}

const fillRed = document.querySelector('.fillRed');
const emptiesRed = document.querySelectorAll('.emptyRed');


fillRed.addEventListener('dragstart', dragStart);
fillRed.addEventListener('dragend', dragEnd)


for (const emptyRed of emptiesRed) {
    emptyRed.addEventListener('dragover', dragOverRed);
    emptyRed.addEventListener('dragenter', dragEnterRed);
    emptyRed.addEventListener('dragleave', dragLeaveRed);
    emptyRed.addEventListener('drop', dragDropRed);
}

function dragStart() {
    console.log(this.className.split(' '));
    
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fillRed';
}

function dragOverRed(item) {
    item.preventDefault();
}

function dragEnterRed(item) {
    item.preventDefault();
    this.className += ' hovered';
}

function dragLeaveRed() {
    this.className = 'emptyRed';
}

function dragDropRed() {
    this.className = 'emptyRed';
    this.append(fillRed)
}