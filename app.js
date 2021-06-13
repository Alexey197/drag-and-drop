const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
})

function dragstart(evt) {
  evt.target.classList.add('hold')
  setTimeout(() => evt.target.classList.add('hide'), 0)
}

function dragend(evt) {
  evt.target.className = 'item'
}

function dragover(evt) {
  evt.preventDefault()
}

function dragenter(evt) {
  evt.target.classList.add('hovered')
  console.log('drag enter')
}

function dragleave(evt) {
  evt.target.classList.remove('hovered')
  console.log('drag leave')
}

function dragdrop(evt) {
  evt.target.classList.remove('hovered')
  evt.target.append(item)
}
